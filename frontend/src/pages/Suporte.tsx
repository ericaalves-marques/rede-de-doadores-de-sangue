import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Mail, Phone, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Suporte = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    categoria: "",
    assunto: "",
    mensagem: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Enviar para o backend
    console.log("Enviando ticket de suporte:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Nossa equipe responderá em até 24 horas.",
    });

    // Limpar formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      categoria: "",
      assunto: "",
      mensagem: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Central de Suporte</h1>
            <p className="text-lg text-muted-foreground">
              Estamos aqui para ajudar você. Entre em contato conosco!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Contact Cards */}
            <Card className="shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-sm text-muted-foreground mb-1">(11) 1234-5678</p>
                <p className="text-xs text-muted-foreground">Seg-Sex: 8h-18h</p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-sm text-muted-foreground mb-1">suporte@doesangue.com.br</p>
                <p className="text-xs text-muted-foreground">Resposta em 24h</p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Horário</h3>
                <p className="text-sm text-muted-foreground mb-1">Segunda a Sexta</p>
                <p className="text-xs text-muted-foreground">8:00 - 18:00</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Enviar Mensagem
              </CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => handleChange("telefone", e.target.value)}
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="categoria">Categoria *</Label>
                    <Select 
                      value={formData.categoria}
                      onValueChange={(value) => handleChange("categoria", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="duvida">Dúvida</SelectItem>
                        <SelectItem value="agendamento">Problema com Agendamento</SelectItem>
                        <SelectItem value="cadastro">Problema com Cadastro</SelectItem>
                        <SelectItem value="tecnico">Problema Técnico</SelectItem>
                        <SelectItem value="sugestao">Sugestão</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto">Assunto *</Label>
                  <Input
                    id="assunto"
                    value={formData.assunto}
                    onChange={(e) => handleChange("assunto", e.target.value)}
                    placeholder="Resuma sua dúvida ou problema"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => handleChange("mensagem", e.target.value)}
                    placeholder="Descreva sua dúvida ou problema em detalhes..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" variant="hero">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Suporte;
