import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const cadastroSchema = z.object({
  nome: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres").max(100, "Senha muito longa"),
  telefone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  tipoSanguineo: z.string().min(1, "Selecione um tipo sanguíneo"),
});

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    tipoSanguineo: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.senha !== formData.confirmarSenha) {
      toast.error("As senhas não coincidem!");
      return;
    }

    try {
      cadastroSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha,
          telefone: formData.telefone,
          tipoSanguineo: formData.tipoSanguineo
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Erro no servidor' }));
        throw new Error(errorData.message || `Erro no servidor: ${response.status}`);
      }

      const data = await response.json();
      
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userName", data.nome);
      localStorage.setItem("userBloodType", data.tipoSanguineo);
      
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("fetch") || error.message.includes("Failed to fetch")) {
          toast.error("Não foi possível conectar ao servidor. Verifique se o backend está rodando em http://localhost:8080");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.error("Erro ao realizar cadastro. Tente novamente.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold">
            <div className="rounded-full bg-primary p-3">
              <Heart className="h-6 w-6 text-primary-foreground fill-current" />
            </div>
            <span>Doe Sangue</span>
          </Link>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Criar Conta</CardTitle>
            <CardDescription>
              Preencha seus dados para se tornar um doador
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    placeholder="João Silva"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(11) 98765-4321"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tipoSanguineo">Tipo Sanguíneo</Label>
                <Select
                  value={formData.tipoSanguineo}
                  onValueChange={(value) => setFormData({ ...formData, tipoSanguineo: value })}
                  required
                >
                  <SelectTrigger id="tipoSanguineo">
                    <SelectValue placeholder="Selecione seu tipo sanguíneo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="senha">Senha</Label>
                  <Input
                    id="senha"
                    type="password"
                    placeholder="••••••••"
                    value={formData.senha}
                    onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
                  <Input
                    id="confirmarSenha"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmarSenha}
                    onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Criar Conta
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Já tem uma conta? </span>
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Entrar
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Voltar para página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
