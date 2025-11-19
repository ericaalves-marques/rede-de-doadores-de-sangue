import { useState, useEffect } from "react";
import { Bell, X, Heart, Calendar, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: string;
  tipo: "urgente" | "campanha" | "lembrete" | "info";
  titulo: string;
  mensagem: string;
  data: string;
  lida: boolean;
}

export const NotificationsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificacoes, setNotificacoes] = useState<Notification[]>([
    {
      id: "1",
      tipo: "urgente",
      titulo: "Urgência Tipo O-",
      mensagem: "Hospital Central precisa urgentemente de doadores tipo O-. Ajude a salvar vidas!",
      data: "Hoje, 10:30",
      lida: false
    },
    {
      id: "2",
      tipo: "lembrete",
      titulo: "Lembrete de Doação",
      mensagem: "Você pode doar novamente! Sua última doação foi há 65 dias.",
      data: "Hoje, 09:00",
      lida: false
    },
    {
      id: "3",
      tipo: "campanha",
      titulo: "Nova Campanha Disponível",
      mensagem: "Campanha de Verão 2025 está ativa. Participe e ganhe pontos!",
      data: "Ontem, 15:20",
      lida: true
    },
    {
      id: "4",
      tipo: "info",
      titulo: "Doação Confirmada",
      mensagem: "Sua doação agendada para 25/02 às 14:00 foi confirmada.",
      data: "23/01, 18:45",
      lida: true
    }
  ]);

  const naoLidas = notificacoes.filter(n => !n.lida).length;

  const getIcon = (tipo: string) => {
    switch (tipo) {
      case "urgente":
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case "campanha":
        return <Heart className="h-5 w-5 text-primary" />;
      case "lembrete":
        return <Calendar className="h-5 w-5 text-blue-600" />;
      default:
        return <Info className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const marcarComoLida = (id: string) => {
    setNotificacoes(prev =>
      prev.map(n => n.id === id ? { ...n, lida: true } : n)
    );
  };

  const marcarTodasComoLidas = () => {
    setNotificacoes(prev =>
      prev.map(n => ({ ...n, lida: true }))
    );
  };

  const removerNotificacao = (id: string) => {
    setNotificacoes(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Bell className="h-5 w-5" />
        {naoLidas > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            {naoLidas}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <Card className="absolute right-0 top-12 w-96 max-w-[calc(100vw-2rem)] shadow-lg z-50">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">Notificações</h3>
                <div className="flex items-center gap-2">
                  {naoLidas > 0 && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={marcarTodasComoLidas}
                      className="text-xs"
                    >
                      Marcar todas como lidas
                    </Button>
                  )}
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <ScrollArea className="h-[400px]">
                {notificacoes.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">
                    <Bell className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Nenhuma notificação</p>
                  </div>
                ) : (
                  <div className="divide-y">
                    {notificacoes.map((notificacao) => (
                      <div
                        key={notificacao.id}
                        className={`p-4 hover:bg-accent/50 transition-colors ${
                          !notificacao.lida ? "bg-accent/30" : ""
                        }`}
                        onClick={() => marcarComoLida(notificacao.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1">{getIcon(notificacao.tipo)}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="font-semibold text-sm">{notificacao.titulo}</h4>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 flex-shrink-0"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removerNotificacao(notificacao.id);
                                }}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {notificacao.mensagem}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                {notificacao.data}
                              </span>
                              {!notificacao.lida && (
                                <Badge variant="secondary" className="text-xs">
                                  Nova
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};
