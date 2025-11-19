import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email, 
          senha: formData.senha 
        })
      });

      if (response.ok) {
        const data = await response.json();
        
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userEmail", data.email);
        localStorage.setItem("userName", data.nome);
        localStorage.setItem("userBloodType", data.tipoSanguineo);
        localStorage.setItem("isAuthenticated", "true");
        
        toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      } else {
        const errorData = await response.json().catch(() => ({ error: "Falha no login" }));
        toast.error(errorData.error || errorData.message || "Email ou senha inválidos");
      }
    } catch (error) {
      toast.error("Erro ao conectar com o servidor. Verifique se o backend está rodando em http://localhost:8080");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 p-4">
      <div className="w-full max-w-md">
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
            <CardTitle className="text-2xl font-bold">Entrar</CardTitle>
            <CardDescription>
              Digite seu e-mail e senha para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Não tem uma conta? </span>
              <Link to="/cadastro" className="text-primary font-semibold hover:underline">
                Cadastre-se
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

export default Login;