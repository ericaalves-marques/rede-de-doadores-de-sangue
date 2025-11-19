import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone, Droplet, Award, Edit, Save } from "lucide-react";
import { toast } from "sonner";

const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoSanguineo: "",
  });

  useEffect(() => {
    // Carregar dados do usuário - será substituído por chamada ao backend Java
    setFormData({
      nome: localStorage.getItem("userName") || "",
      email: localStorage.getItem("userEmail") || "",
      telefone: localStorage.getItem("userPhone") || "",
      tipoSanguineo: localStorage.getItem("userBloodType") || "",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    
    const response = await fetch('http://localhost:8080/api/usuarios/{id}', {
       method: 'PUT',
       headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
     });

    localStorage.setItem("userName", formData.nome);
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userPhone", formData.telefone);
    localStorage.setItem("userBloodType", formData.tipoSanguineo);
    
    setIsEditing(false);
    toast.success("Perfil atualizado com sucesso!");
  };

  const achievements = [
    { id: 1, title: "Primeira Doação", description: "Realizou sua primeira doação", icon: "🎉" },
    { id: 2, title: "5 Doações", description: "Alcançou 5 doações", icon: "⭐" },
    { id: 3, title: "Doador Regular", description: "Doou nos últimos 3 meses", icon: "🏆" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Meu Perfil</h1>
            <p className="text-muted-foreground">
              Gerencie suas informações pessoais e veja suas conquistas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Info */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Informações Pessoais</CardTitle>
                    {!isEditing && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(true)}
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </Button>
                    )}
                  </div>
                  <CardDescription>
                    {isEditing ? "Atualize suas informações" : "Suas informações cadastrais"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="nome"
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          disabled={!isEditing}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={!isEditing}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          disabled={!isEditing}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tipoSanguineo">Tipo Sanguíneo</Label>
                      {isEditing ? (
                        <Select
                          value={formData.tipoSanguineo}
                          onValueChange={(value) => setFormData({ ...formData, tipoSanguineo: value })}
                        >
                          <SelectTrigger id="tipoSanguineo">
                            <SelectValue placeholder="Selecione" />
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
                      ) : (
                        <div className="relative">
                          <Droplet className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            value={formData.tipoSanguineo}
                            disabled
                            className="pl-10"
                          />
                        </div>
                      )}
                    </div>

                    {isEditing && (
                      <div className="flex gap-3">
                        <Button type="submit" variant="hero">
                          <Save className="mr-2 h-4 w-4" />
                          Salvar Alterações
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setIsEditing(false);
                            setFormData({
                              nome: localStorage.getItem("userName") || "",
                              email: localStorage.getItem("userEmail") || "",
                              telefone: localStorage.getItem("userPhone") || "",
                              tipoSanguineo: localStorage.getItem("userBloodType") || "",
                            });
                          }}
                        >
                          Cancelar
                        </Button>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-primary" />
                    Estatísticas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 rounded-lg bg-accent/50">
                    <div className="text-3xl font-bold text-primary mb-1">5</div>
                    <div className="text-sm text-muted-foreground">Doações Realizadas</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-accent/50">
                    <div className="text-3xl font-bold text-primary mb-1">15</div>
                    <div className="text-sm text-muted-foreground">Vidas Salvas</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-accent/50">
                    <div className="text-3xl font-bold text-primary mb-1">250</div>
                    <div className="text-sm text-muted-foreground">Pontos Acumulados</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Tipo Sanguíneo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-6">
                    <Badge variant="outline" className="text-2xl px-6 py-3 border-2 border-primary text-primary">
                      {formData.tipoSanguineo || "Não informado"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Achievements */}
          <Card className="mt-6 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Conquistas
              </CardTitle>
              <CardDescription>Suas medalhas e reconhecimentos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="p-4 rounded-lg border bg-gradient-to-br from-accent/50 to-background hover:shadow-md transition-shadow"
                  >
                    <div className="text-4xl mb-3">{achievement.icon}</div>
                    <h3 className="font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
