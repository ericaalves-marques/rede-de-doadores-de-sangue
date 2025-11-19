// src/pages/Campanhas.tsx

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Campanhas: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBloodType, setFilterBloodType] = useState("all");

  const campanhas = [
    {
      id: 1,
      titulo: "Campanha Urgente - Hospital Central",
      descricao: "Necessidade urgente de sangue tipo A- para pacientes em tratamento intensivo.",
      tipoSanguineo: "A-",
      dataInicio: "20/01/2025",
      dataFim: "30/01/2025",
      local: "Hospital Central - São Paulo",
      status: "Urgente",
      doadoresNecessarios: 50,
      doadoresCadastrados: 23,
    },
    {
      id: 2,
      titulo: "Campanha Mensal - Banco de Sangue Norte",
      descricao: "Campanha regular para reposição de estoque de todos os tipos sanguíneos.",
      tipoSanguineo: "Todos",
      dataInicio: "15/01/2025",
      dataFim: "15/02/2025",
      local: "Banco de Sangue Norte",
      status: "Ativa",
      doadoresNecessarios: 200,
      doadoresCadastrados: 89,
    },
    {
      id: 3,
      titulo: "Emergência - Tipo O Negativo",
      descricao: "Emergência em hospital infantil. Necessitamos urgentemente de doadores O-.",
      tipoSanguineo: "O-",
      dataInicio: "18/01/2025",
      dataFim: "25/01/2025",
      local: "Hospital Infantil Santa Maria",
      status: "Crítico",
      doadoresNecessarios: 30,
      doadoresCadastrados: 8,
    },
    {
      id: 4,
      titulo: "Campanha Comunitária - Bairro Sul",
      descricao: "Ação em parceria com a comunidade local para doação de sangue.",
      tipoSanguineo: "Todos",
      dataInicio: "22/01/2025",
      dataFim: "22/01/2025",
      local: "Centro Comunitário Sul",
      status: "Ativa",
      doadoresNecessarios: 100,
      doadoresCadastrados: 45,
    },
    {
      id: 5,
      titulo: "Ação Especial - Tipo B+",
      descricao: "Campanha focada em reposição de estoque de sangue tipo B+.",
      tipoSanguineo: "B+",
      dataInicio: "25/01/2025",
      dataFim: "05/02/2025",
      local: "Hemocentro Regional",
      status: "Ativa",
      doadoresNecessarios: 75,
      doadoresCadastrados: 32,
    },
  ];

  const filteredCampanhas = campanhas.filter((c) => {
    const matchesSearch =
      c.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodType =
      filterBloodType === "all" || c.tipoSanguineo === filterBloodType || c.tipoSanguineo === "Todos";
    return matchesSearch && matchesBloodType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Crítico":
        return "bg-red-100 text-red-700 border-red-200";
      case "Urgente":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-green-100 text-green-700 border-green-200";
    }
  };

  const getProgressPercentage = (current: number, total: number) => {
    return Math.min((current / total) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Campanhas de Doação</h1>
          <p className="text-muted-foreground">
            Veja as campanhas ativas e encontre onde você pode ajudar a salvar vidas
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6 shadow-sm">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar campanhas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={filterBloodType} onValueChange={setFilterBloodType}>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrar por tipo sanguíneo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os tipos</SelectItem>
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
          </CardContent>
        </Card>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredCampanhas.map((campanha) => (
            <Card key={campanha.id} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl">{campanha.titulo}</CardTitle>
                  <Badge variant="outline" className={getStatusColor(campanha.status)}>
                    {campanha.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{campanha.descricao}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Heart className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Tipo Sanguíneo:</span>
                    <Badge variant="outline" className="border-primary text-primary">
                      {campanha.tipoSanguineo}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {campanha.dataInicio} até {campanha.dataFim}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{campanha.local}</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Doadores
                    </span>
                    <span className="font-semibold">
                      {campanha.doadoresCadastrados} / {campanha.doadoresNecessarios}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{
                        width: `${getProgressPercentage(campanha.doadoresCadastrados, campanha.doadoresNecessarios)}%`,
                      }}
                    />
                  </div>
                </div>

                <Link to="/agendar" className="block">
                  <Button variant="hero" className="w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Quero Participar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCampanhas.length === 0 && (
          <Card className="shadow-sm">
            <CardContent className="py-12 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Nenhuma campanha encontrada</h3>
              <p className="text-muted-foreground">Tente ajustar os filtros de busca</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Campanhas;
