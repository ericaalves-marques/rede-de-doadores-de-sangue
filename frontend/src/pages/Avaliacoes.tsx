import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, ThumbsUp, MessageCircle, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Avaliacoes = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comentario, setComentario] = useState("");

  const avaliacoes = [
    {
      id: 1,
      usuario: "Maria Silva",
      rating: 5,
      comentario: "Experiência incrível! Atendimento rápido e profissionais muito atenciosos. Recomendo!",
      data: "15/01/2025",
      local: "Hospital Central",
      likes: 12
    },
    {
      id: 2,
      usuario: "João Santos",
      rating: 5,
      comentario: "Primeira vez doando e foi tudo muito tranquilo. A equipe explicou cada etapa com clareza.",
      data: "10/01/2025",
      local: "Posto de Saúde Norte",
      likes: 8
    },
    {
      id: 3,
      usuario: "Ana Costa",
      rating: 4,
      comentario: "Processo rápido e bem organizado. Apenas a espera foi um pouco longa, mas vale a pena!",
      data: "05/01/2025",
      local: "Hospital Central",
      likes: 5
    }
  ];

  const estatisticas = [
    { label: "Avaliação Média", value: "4.8", icon: Star },
    { label: "Total de Avaliações", value: "1.234", icon: MessageCircle },
    { label: "Doadores Satisfeitos", value: "96%", icon: ThumbsUp },
    { label: "Reconhecimentos", value: "45", icon: Award }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Avaliação incompleta",
        description: "Por favor, selecione uma nota de 1 a 5 estrelas.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Enviar para o backend
    console.log("Enviando avaliação:", { rating, comentario });
    
    toast({
      title: "Avaliação enviada!",
      description: "Obrigado pelo seu feedback. Ele nos ajuda a melhorar!",
    });

    setRating(0);
    setComentario("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Avaliações</h1>
            <p className="text-lg text-muted-foreground">
              Veja o que outros doadores estão dizendo e compartilhe sua experiência
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {estatisticas.map((stat, index) => (
              <Card key={index} className="shadow-md text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Review */}
          <Card className="shadow-lg mb-12">
            <CardHeader>
              <CardTitle>Deixe sua Avaliação</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Como foi sua experiência?
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setRating(value)}
                        onMouseEnter={() => setHoveredRating(value)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-10 w-10 ${
                            value <= (hoveredRating || rating)
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="comentario" className="block text-sm font-medium mb-2">
                    Seu Comentário (opcional)
                  </label>
                  <Textarea
                    id="comentario"
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    placeholder="Compartilhe sua experiência com outros doadores..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" variant="hero">
                  Enviar Avaliação
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Reviews List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">O que nossos doadores dizem</h2>
            {avaliacoes.map((avaliacao) => (
              <Card key={avaliacao.id} className="shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback>{avaliacao.usuario[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold">{avaliacao.usuario}</div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{avaliacao.local}</span>
                            <span>•</span>
                            <span>{avaliacao.data}</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < avaliacao.rating
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">{avaliacao.comentario}</p>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {avaliacao.likes}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avaliacoes;
