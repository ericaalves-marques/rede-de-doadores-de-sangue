import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, TrendingUp, Users, Droplet, Download, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Relatorios = () => {
  const [periodo, setPeriodo] = useState("mes");
  const [campanha, setCampanha] = useState("todas");

  const estatisticas = [
    { label: "Total de Doações", value: "1.234", change: "+12%", icon: Droplet },
    { label: "Doadores Ativos", value: "856", change: "+8%", icon: Users },
    { label: "Taxa de Comparecimento", value: "92%", change: "+5%", icon: TrendingUp },
    { label: "Novas Campanhas", value: "15", change: "+3", icon: BarChart3 }
  ];

  const campanhas = [
    {
      id: 1,
      nome: "Campanha de Verão 2025",
      periodo: "Jan - Mar 2025",
      meta: 500,
      alcancado: 420,
      doadores: 280,
      locais: ["Hospital Central", "Posto Norte"]
    },
    {
      id: 2,
      nome: "Urgência Tipo O-",
      periodo: "Dez 2024 - Jan 2025",
      meta: 200,
      alcancado: 195,
      doadores: 130,
      locais: ["Hospital Central"]
    },
    {
      id: 3,
      nome: "Campanha de Fim de Ano",
      periodo: "Nov - Dez 2024",
      meta: 800,
      alcancado: 850,
      doadores: 560,
      locais: ["Hospital Central", "Posto Norte", "Posto Sul"]
    }
  ];

  const doacoesPorTipo = [
    { tipo: "O+", quantidade: 320, porcentagem: 26 },
    { tipo: "A+", quantidade: 280, porcentagem: 23 },
    { tipo: "B+", quantidade: 210, porcentagem: 17 },
    { tipo: "AB+", quantidade: 150, porcentagem: 12 },
    { tipo: "O-", quantidade: 120, porcentagem: 10 },
    { tipo: "A-", quantidade: 90, porcentagem: 7 },
    { tipo: "B-", quantidade: 40, porcentagem: 3 },
    { tipo: "AB-", quantidade: 24, porcentagem: 2 }
  ];

  const handleExportarRelatorio = () => {
    console.log("Exportando relatório:", { periodo, campanha });
    // TODO: Implementar exportação
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Relatórios de Campanhas</h1>
              <p className="text-muted-foreground">
                Acompanhe métricas e resultados das campanhas de doação
              </p>
            </div>
            <Button variant="hero" onClick={handleExportarRelatorio}>
              <Download className="mr-2 h-4 w-4" />
              Exportar Relatório
            </Button>
          </div>

          {/* Filters */}
          <Card className="mb-8 shadow-md">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Período</label>
                  <Select value={periodo} onValueChange={setPeriodo}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semana">Última Semana</SelectItem>
                      <SelectItem value="mes">Último Mês</SelectItem>
                      <SelectItem value="trimestre">Último Trimestre</SelectItem>
                      <SelectItem value="ano">Último Ano</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Campanha</label>
                  <Select value={campanha} onValueChange={setCampanha}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todas">Todas as Campanhas</SelectItem>
                      <SelectItem value="1">Campanha de Verão 2025</SelectItem>
                      <SelectItem value="2">Urgência Tipo O-</SelectItem>
                      <SelectItem value="3">Campanha de Fim de Ano</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {estatisticas.map((stat, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Campaigns Performance */}
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle>Desempenho das Campanhas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {campanhas.map((camp) => {
                  const progresso = (camp.alcancado / camp.meta) * 100;
                  return (
                    <div key={camp.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{camp.nome}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {camp.periodo}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {camp.doadores} doadores
                            </span>
                          </div>
                        </div>
                        <Badge 
                          variant={progresso >= 100 ? "default" : "outline"}
                          className={progresso >= 100 ? "bg-green-600" : ""}
                        >
                          {progresso.toFixed(0)}% da meta
                        </Badge>
                      </div>

                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Progresso</span>
                          <span className="font-medium">{camp.alcancado} / {camp.meta} doações</span>
                        </div>
                        <div className="h-2 bg-accent rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary transition-all"
                            style={{ width: `${Math.min(progresso, 100)}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {camp.locais.join(", ")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Blood Type Distribution */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Distribuição por Tipo Sanguíneo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {doacoesPorTipo.map((item) => (
                  <div key={item.tipo}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Tipo {item.tipo}</span>
                      <span className="text-muted-foreground">
                        {item.quantidade} doações ({item.porcentagem}%)
                      </span>
                    </div>
                    <div className="h-2 bg-accent rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary"
                        style={{ width: `${item.porcentagem}%` }}
                      />
                    </div>
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

export default Relatorios;
