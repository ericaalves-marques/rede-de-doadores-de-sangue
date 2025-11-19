import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Award, Shield, Clock, Phone, Mail, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Solidariedade",
      description: "Acreditamos no poder da doação voluntária e no espírito humano de ajudar o próximo."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Seguimos os mais altos padrões de qualidade e segurança em todo o processo de doação."
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Trabalhamos para que todos possam participar dessa corrente do bem, sem discriminação."
    },
    {
      icon: Target,
      title: "Transparência",
      description: "Mantemos comunicação clara sobre processos, estatísticas e uso das doações."
    }
  ];

  const timeline = [
    { year: "2010", event: "Fundação do projeto" },
    { year: "2013", event: "Primeira campanha nacional" },
    { year: "2016", event: "10.000 doadores cadastrados" },
    { year: "2020", event: "Implementação do sistema digital" },
    { year: "2025", event: "Mais de 50.000 vidas salvas" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container relative mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <Heart className="h-4 w-4 fill-current" />
              Nossa História
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre o <span className="text-primary">Sistema de Doação</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Há mais de 15 anos conectando doadores voluntários com quem mais precisa,
              salvando vidas e transformando realidades através da solidariedade.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Nossa Missão
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Facilitar e promover a doação voluntária de sangue, conectando doadores
                  a bancos de sangue e hospitais de forma eficiente e segura.
                </p>
                <p>
                  Trabalhamos para que nenhuma vida seja perdida por falta de sangue,
                  criando uma rede solidária de doadores comprometidos com o bem-estar
                  coletivo.
                </p>
                <p>
                  Nosso sistema digital tornou mais fácil e acessível o processo de
                  doação, permitindo que mais pessoas possam salvar vidas regularmente.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Anos de Atuação</div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Postos Parceiros</div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Suporte Disponível</div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho e compromisso com a sociedade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="rounded-full bg-accent w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nossa Trajetória
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma história de dedicação, crescimento e vidas transformadas.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <Card className="inline-block border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                          <div className="text-muted-foreground">{item.event}</div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                    </div>
                    
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              Como Trabalhamos
            </h2>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Cadastro e Gerenciamento</h3>
                      <p className="text-muted-foreground">
                        Mantemos um banco de dados atualizado de doadores voluntários,
                        facilitando o contato em casos de necessidade urgente.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-primary shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Agendamento Inteligente</h3>
                      <p className="text-muted-foreground">
                        Sistema de agendamento que otimiza horários e reduz filas,
                        tornando a experiência mais confortável para o doador.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-primary shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Campanhas e Conscientização</h3>
                      <p className="text-muted-foreground">
                        Organizamos campanhas regulares de doação e ações educativas
                        para promover a cultura da doação de sangue.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Entre em Contato
              </h2>
              <p className="text-muted-foreground">
                Estamos sempre disponíveis para esclarecer dúvidas e ajudar você.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none shadow-md text-center">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Telefone</h3>
                  <p className="text-sm text-muted-foreground mb-1">(11) 1234-5678</p>
                  <p className="text-sm text-muted-foreground">Emergências: 0800-123-4567</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md text-center">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">E-mail</h3>
                  <p className="text-sm text-muted-foreground mb-1">contato@doesangue.com.br</p>
                  <p className="text-sm text-muted-foreground">suporte@doesangue.com.br</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md text-center">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Endereço</h3>
                  <p className="text-sm text-muted-foreground mb-1">Av. Paulista, 1000</p>
                  <p className="text-sm text-muted-foreground">São Paulo - SP</p>
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
            Faça Parte Dessa Causa
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de doadores e ajude a salvar vidas. Cadastre-se agora!
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
                <li><Link to="/sobre" className="hover:text-primary">Sobre Nós</Link></li>
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

export default About;
