import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Calendar, MapPin, Clock, Heart, Download, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConfirmacaoDoacao = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [doacao, setDoacao] = useState<any>(null);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (isAuth !== "true") {
      navigate("/login");
      return;
    }

    // Buscar dados da doação confirmada
    const doacaoId = searchParams.get("id");
    if (doacaoId) {
      // TODO: Buscar do backend
      setDoacao({
        id: doacaoId,
        data: "25/02/2025",
        horario: "14:00",
        local: "Hospital Central",
        endereco: "Av. Paulista, 1000 - São Paulo, SP",
        protocolo: `DOA-${Date.now()}`,
        tipo: "Agendada"
      });
    }
  }, [navigate, searchParams]);

  const handleDownloadComprovante = () => {
    toast({
      title: "Download iniciado",
      description: "Seu comprovante está sendo gerado.",
    });
    // TODO: Implementar download do comprovante
  };

  const handleCompartilhar = () => {
    if (navigator.share) {
      navigator.share({
        title: "Doação de Sangue Confirmada",
        text: `Acabei de agendar minha doação de sangue! Protocolo: ${doacao?.protocolo}`,
      });
    } else {
      toast({
        title: "Link copiado!",
        description: "Link de compartilhamento copiado para área de transferência.",
      });
    }
  };

  if (!doacao) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Doação Confirmada!</h1>
            <p className="text-muted-foreground">
              Sua doação foi agendada com sucesso. Obrigado por salvar vidas!
            </p>
          </div>

          {/* Donation Details */}
          <Card className="mb-6 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Detalhes da Doação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Data</div>
                  <div className="text-muted-foreground">{doacao.data}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Horário</div>
                  <div className="text-muted-foreground">{doacao.horario}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">{doacao.local}</div>
                  <div className="text-sm text-muted-foreground">{doacao.endereco}</div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Protocolo</span>
                  <Badge variant="outline" className="font-mono">
                    {doacao.protocolo}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <Button 
              className="w-full" 
              variant="outline"
              onClick={handleDownloadComprovante}
            >
              <Download className="mr-2 h-4 w-4" />
              Baixar Comprovante
            </Button>

            <Button 
              className="w-full" 
              variant="outline"
              onClick={handleCompartilhar}
            >
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar
            </Button>

            <Button 
              className="w-full" 
              variant="hero"
              onClick={() => navigate("/dashboard")}
            >
              Voltar ao Dashboard
            </Button>
          </div>

          {/* Instructions */}
          <Card className="mt-8 bg-accent/50 border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Instruções Importantes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Chegue com 15 minutos de antecedência</li>
                <li>• Traga um documento com foto</li>
                <li>• Esteja bem alimentado e hidratado</li>
                <li>• Evite bebidas alcoólicas nas 12h anteriores</li>
                <li>• Durma bem na noite anterior</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacaoDoacao;
