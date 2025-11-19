import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, Award, Bell, TrendingUp, Droplet } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userBloodType, setUserBloodType] = useState("");

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (isAuth !== "true") {
      navigate("/login");
      return;
    }
    
    setUserName(localStorage.getItem("userName") || "Doador");
    setUserBloodType(localStorage.getItem("userBloodType") || "O+");
  }, [navigate]);

  
  const stats = [
    { icon: Droplet, label: "Doações Realizadas", value: "5", color: "text-primary" },
    { icon: Heart, label: "Vidas Salvas", value: "15", color: "text-primary" },
    { icon: Calendar, label: "Próxima Doação", value: "Em 30 dias", color: "text-muted-foreground" },
    { icon: Award, label: "Pontos", value: "250", color: "text-primary" },
  ];

  const recentDonations = [
    { id: 1, data: "15/01/2025", local: "Hospital Central", status: "Concluída" },
    { id: 2, data: "20/11/2024", local: "Posto de Saúde Norte", status: "Concluída" },
    { id: 3, data: "25/09/2024", local: "Hospital Central", status: "Concluída" },
  ];

  const urgentCampaigns = [
    { id: 1, title: "Campanha Urgente - Tipo A-", bloodType: "A-", date: "Até 30/01/2025" },
    { id: 2, title: "Emergência Hospital Sul", bloodType: "O-", date: "Crítico" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Olá, {userName}! 👋
          </h1>
          <p className="text-muted-foreground">
            Bem-vindo ao seu painel de doador. Seu tipo sanguíneo: 
            <Badge variant="outline" className="ml-2 border-primary text-primary">
              {userBloodType}
            </Badge>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Notifications */}
          <Card className="lg:col-span-2 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notificações Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {urgentCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="flex items-start gap-4 p-4 rounded-lg bg-accent/50 border border-primary/20"
                >
                  <div className="rounded-full bg-primary/10 p-2">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{campaign.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Tipo sanguíneo: <span className="font-semibold text-primary">{campaign.bloodType}</span>
                    </p>
                    <div className="text-xs text-muted-foreground">{campaign.date}</div>
                  </div>
                  <Link to="/agendar">
                    <Button size="sm" variant="hero">
                      Agendar
                    </Button>
                  </Link>
                </div>
              ))}
              
              <div className="text-center pt-4">
                <Link to="/campanhas">
                  <Button variant="outline">
                    Ver Todas as Campanhas
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/agendar" className="block">
                <Button className="w-full justify-start" variant="hero">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Doação
                </Button>
              </Link>
              <Link to="/campanhas" className="block">
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Ver Campanhas
                </Button>
              </Link>
              <Link to="/perfil" className="block">
                <Button className="w-full justify-start" variant="outline">
                  <Heart className="mr-2 h-4 w-4" />
                  Meu Perfil
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Donations */}
        <Card className="mt-6 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Histórico de Doações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDonations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Droplet className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{donation.local}</div>
                      <div className="text-sm text-muted-foreground">{donation.data}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {donation.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
