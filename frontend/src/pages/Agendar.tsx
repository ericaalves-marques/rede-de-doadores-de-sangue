import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock, MapPin, Heart, CheckCircle, Users } from "lucide-react";
import { toast } from "sonner";

const Agendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({ local: "", horario: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Autenticação
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (isAuth !== "true") {
      toast.error("Você precisa estar logado para agendar uma doação.");
      navigate("/login");
    }
  }, [navigate]);

  const locais = [
    { id: 1, nome: "Hospital Central - São Paulo" },
    { id: 2, nome: "Banco de Sangue Norte" },
    { id: 3, nome: "Hospital Infantil Santa Maria" },
    { id: 4, nome: "Centro Comunitário Sul" },
    { id: 5, nome: "Hemocentro Regional" },
  ];

  const horarios = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !formData.local || !formData.horario) {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const authToken = localStorage.getItem("authToken");
      const userEmail = localStorage.getItem("userEmail");

      if (!authToken || !userEmail) {
        toast.error("Você precisa estar logado para agendar uma doação.");
        navigate("/login");
        return;
      }

      // ⛔ CORRIGIDO: envia apenas a data YYYY-MM-DD (LocalDate)
      const formattedDate = date.toISOString().split("T")[0];

      const response = await fetch("http://localhost:8080/api/doacoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          email: userEmail,
          data: formattedDate,
          horario: formData.horario,
          local: formData.local,
          status: "Agendada",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Erro ao agendar a doação" }));
        toast.error(errorData.error || errorData.message || "Não foi possível agendar a doação");
        return;
      }

      setIsSubmitted(true);
      toast.success("Doação agendada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível agendar a doação. Verifique se o backend está rodando.");
    }
  };

  // ==========================
  //   TELA DE CONFIRMAÇÃO
  // ==========================

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto text-center shadow-lg">
            <CardContent className="pt-12 pb-12">
              <div className="rounded-full bg-green-100 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Doação Agendada!</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Sua doação foi agendada com sucesso. Você receberá um e-mail de confirmação
                com todos os detalhes.
              </p>

              <div className="bg-accent/50 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
                <h3 className="font-semibold mb-4">Detalhes do Agendamento:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <span>{date?.toLocaleDateString("pt-BR")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{formData.horario}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{formData.local}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setDate(undefined);
                    setFormData({ local: "", horario: "" });
                  }}
                >
                  Agendar Nova Doação
                </Button>

                <Button variant="outline" onClick={() => navigate("/dashboard")} className="ml-3">
                  Voltar ao Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ==========================
  //       TELA FORMULÁRIO
  // ==========================

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Agendar Doação</h1>
            <p className="text-muted-foreground">
              Escolha o melhor dia, horário e local para realizar sua doação
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="border-l-4 border-l-primary shadow-sm">
              <CardContent className="pt-6">
                <Heart className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Processo Rápido</h3>
                <p className="text-sm text-muted-foreground">A doação leva apenas 40-50 minutos</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-sm">
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Seguro</h3>
                <p className="text-sm text-muted-foreground">Processo 100% seguro e higiênico</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-sm">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Impacto</h3>
                <p className="text-sm text-muted-foreground">Uma doação salva até 3 vidas</p>
              </CardContent>
            </Card>
          </div>

          {/* Formulário */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Dados do Agendamento</CardTitle>
              <CardDescription>Preencha as informações abaixo para agendar sua doação</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Calendário */}
                  <div className="space-y-2">
                    <Label>Escolha a Data</Label>
                    <Card className="border-2">
                      <CardContent className="p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          className="rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>

                  {/* Local e horário */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Local de Doação</Label>
                      <Select
                        value={formData.local}
                        onValueChange={(value) => setFormData({ ...formData, local: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o local" />
                        </SelectTrigger>
                        <SelectContent>
                          {locais.map((local) => (
                            <SelectItem key={local.id} value={local.nome}>
                              {local.nome}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Horário</Label>
                      <Select
                        value={formData.horario}
                        onValueChange={(value) => setFormData({ ...formData, horario: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o horário" />
                        </SelectTrigger>
                        <SelectContent>
                          {horarios.map((h) => (
                            <SelectItem key={h} value={h}>
                              {h}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Resumo */}
                    {date && formData.local && formData.horario && (
                      <Card className="bg-accent/50 border-primary/20">
                        <CardContent className="pt-6">
                          <h4 className="font-semibold mb-3">Resumo:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="h-4 w-4 text-primary" />
                              <span>{date.toLocaleDateString("pt-BR")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <span>{formData.horario}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{formData.local}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Heart className="mr-2 h-5 w-5" />
                  Confirmar Agendamento
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Importante */}
          <Card className="mt-6 bg-accent/30 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Lembre-se de levar:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Documento oficial com foto</li>
                <li>• Fazer refeição leve antes da doação</li>
                <li>• Evitar álcool nas últimas 24 horas</li>
                <li>• Estar bem hidratado</li>
                <li>• Ter dormido bem na noite anterior</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Agendar;
