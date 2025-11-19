import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Calendar, Award, Droplet, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import heroImage from "@/assets/hero-blood-donation.jpg";

const Home = () => {
  const stats = [
    { icon: Users, value: "10.000+", label: "Doadores Cadastrados" },
    { icon: Droplet, value: "25.000+", label: "Doações Realizadas" },
    { icon: Heart, value: "50.000+", label: "Vidas Salvas" },
    { icon: Award, value: "15 Anos", label: "De Experiência" },
  ];

  const bloodTypes = [
    { type: "A+", urgent: false },
    { type: "A-", urgent: true },
    { type: "B+", urgent: false },
    { type: "B-", urgent: true },
    { type: "AB+", urgent: false },
    { type: "AB-", urgent: true },
    { type: "O+", urgent: false },
    { type: "O-", urgent: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container relative mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                <Heart className="h-4 w-4 fill-current" />
                Doe Sangue, Salve Vidas
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Uma Doação.
                <br />
                <span className="text-primary">Três Vidas Salvas.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Junte-se a milhares de doadores voluntários e faça parte de uma rede
                que salva vidas todos os dias. Seu sangue pode ser a esperança de alguém.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cadastro">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    <Heart className="mr-2 h-5 w-5" />
                    Quero Ser Doador
                  </Button>
                </Link>
                <Link to="/campanhas">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Ver Campanhas Ativas
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/0 rounded-3xl blur-2xl" />
              <img
                src={heroImage}
                alt="Doação de Sangue"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-sm">
                <CardContent className="pt-6">
                  <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Need Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tipos Sanguíneos em Falta
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alguns tipos sanguíneos estão em situação crítica. Veja se você pode ajudar.
            </p>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
            {bloodTypes.map((blood) => (
              <Card
                key={blood.type}
                className={`text-center transition-all hover:scale-105 ${
                  blood.urgent
                    ? "border-primary bg-accent shadow-strong"
                    : "border-border"
                }`}
              >
                <CardContent className="p-6">
                  <div className="text-2xl font-bold mb-1">{blood.type}</div>
                  {blood.urgent && (
                    <div className="text-xs text-primary font-semibold">URGENTE</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Doar sangue é simples, rápido e seguro. Veja o passo a passo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "1. Cadastre-se",
                description: "Crie sua conta e preencha suas informações básicas e tipo sanguíneo."
              },
              {
                icon: Calendar,
                title: "2. Agende",
                description: "Escolha o melhor dia e horário para fazer sua doação em um de nossos postos."
              },
              {
                icon: Heart,
                title: "3. Doe e Salve",
                description: "Compareça no dia agendado e ajude a salvar até 3 vidas com uma única doação."
              }
            ].map((step, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="rounded-full bg-accent w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Por Que Doar Sangue?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A doação de sangue é um ato voluntário que pode salvar vidas. Uma única
                  doação pode ajudar até 3 pessoas diferentes.
                </p>
                <p>
                  O sangue doado é utilizado em cirurgias, tratamentos de câncer,
                  transplantes e em casos de emergência como acidentes graves.
                </p>
                <p>
                  Os estoques dos bancos de sangue precisam de reposição constante, pois
                  o sangue tem validade limitada e a demanda é contínua.
                </p>
              </div>
              
              <div className="mt-8 p-6 rounded-xl bg-accent">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Processo Rápido</h3>
                    <p className="text-sm text-muted-foreground">
                      A doação leva apenas 40-50 minutos, incluindo cadastro, triagem e
                      o lanche após a doação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Requisitos Básicos</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Ter entre 16 e 69 anos</li>
                    <li>• Pesar no mínimo 50kg</li>
                    <li>• Estar bem de saúde</li>
                    <li>• Portar documento oficial com foto</li>
                    <li>• Não estar em jejum</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-primary shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Intervalo Entre Doações</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Homens: a cada 60 dias (máx. 4x/ano)</li>
                    <li>• Mulheres: a cada 90 dias (máx. 3x/ano)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pronto Para Salvar Vidas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cadastre-se agora e faça parte dessa corrente do bem. Juntos, podemos
            fazer a diferença.
          </p>
          <Link to="/cadastro">
            <Button variant="hero" size="lg">
              <Heart className="mr-2 h-5 w-5" />
              Quero Me Cadastrar
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg mb-4">
                <div className="rounded-full bg-primary p-2">
                  <Heart className="h-4 w-4 text-primary-foreground fill-current" />
                </div>
                Doe Sangue
              </div>
              <p className="text-sm text-muted-foreground">
                Salvando vidas através da doação voluntária de sangue.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/campanhas" className="hover:text-primary">Campanhas</Link></li>
                <li><Link to="/cadastro" className="hover:text-primary">Cadastrar</Link></li>
                <li><Link to="/login" className="hover:text-primary">Login</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Informações</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Requisitos para Doar</li>
                <li>Perguntas Frequentes</li>
                <li>Política de Privacidade</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contato@doesangue.com.br</li>
                <li>(11) 1234-5678</li>
                <li>Emergências: 0800-123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 Sistema de Doação de Sangue. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
