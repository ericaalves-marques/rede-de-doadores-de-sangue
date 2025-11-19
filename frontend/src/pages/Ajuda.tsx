import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, HelpCircle, FileText, Users, Heart, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Ajuda = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      icon: Heart,
      title: "Doação de Sangue",
      description: "Tudo sobre o processo de doação"
    },
    {
      icon: Users,
      title: "Cadastro e Conta",
      description: "Gerenciar sua conta e perfil"
    },
    {
      icon: FileText,
      title: "Agendamentos",
      description: "Como agendar e gerenciar doações"
    },
    {
      icon: HelpCircle,
      title: "Requisitos",
      description: "Quem pode doar sangue"
    }
  ];

  const faqs = [
    {
      category: "Doação de Sangue",
      question: "Quem pode doar sangue?",
      answer: "Podem doar sangue pessoas entre 16 e 69 anos (menores de 18 anos precisam de autorização dos responsáveis), com peso acima de 50kg, que estejam em boas condições de saúde. É necessário apresentar documento oficial com foto."
    },
    {
      category: "Doação de Sangue",
      question: "Qual o intervalo entre doações?",
      answer: "Homens podem doar a cada 60 dias (máximo 4 doações por ano). Mulheres podem doar a cada 90 dias (máximo 3 doações por ano). É importante respeitar esses intervalos para sua segurança."
    },
    {
      category: "Doação de Sangue",
      question: "Quanto tempo dura uma doação?",
      answer: "O processo completo leva cerca de 40 minutos a 1 hora, incluindo cadastro, triagem, coleta (que dura cerca de 10-15 minutos) e lanche. É rápido e seguro!"
    },
    {
      category: "Requisitos",
      question: "Posso doar em jejum?",
      answer: "Não! É fundamental estar bem alimentado. Faça uma refeição leve antes de doar e evite alimentos gordurosos nas 3 horas que antecedem a doação. Beba bastante água."
    },
    {
      category: "Requisitos",
      question: "Quem teve COVID-19 pode doar?",
      answer: "Sim! Após 10 dias do fim dos sintomas ou do teste positivo (para casos assintomáticos), você já pode doar. Se foi vacinado contra COVID-19, aguarde 48 horas."
    },
    {
      category: "Agendamentos",
      question: "Como faço para agendar uma doação?",
      answer: "Acesse a seção 'Agendar Doação' no seu dashboard, escolha o local, data e horário de sua preferência. Você receberá uma confirmação por e-mail com todas as informações."
    },
    {
      category: "Agendamentos",
      question: "Posso remarcar ou cancelar um agendamento?",
      answer: "Sim! Acesse seu dashboard, vá em 'Minhas Doações' e selecione o agendamento que deseja alterar. Pedimos que cancelamentos sejam feitos com pelo menos 24h de antecedência."
    },
    {
      category: "Cadastro e Conta",
      question: "Como atualizo meus dados cadastrais?",
      answer: "Acesse seu perfil através do menu superior, clique em 'Editar Perfil' e atualize as informações necessárias. Não esqueça de salvar as alterações."
    },
    {
      category: "Cadastro e Conta",
      question: "Esqueci minha senha, o que faço?",
      answer: "Na tela de login, clique em 'Esqueci minha senha'. Digite seu e-mail cadastrado e enviaremos um link para criar uma nova senha."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    searchTerm === "" ||
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <BookOpen className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Central de Ajuda</h1>
            <p className="text-lg text-muted-foreground">
              Encontre respostas para suas dúvidas sobre doação de sangue
            </p>
          </div>

          {/* Search */}
          <Card className="mb-8 shadow-lg">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar por palavra-chave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-accent w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent>
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div>
                          <div className="font-semibold">{faq.question}</div>
                          <div className="text-xs text-muted-foreground mt-1">{faq.category}</div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  Nenhuma pergunta encontrada com esses termos. Tente buscar por outras palavras.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="bg-accent/50 border-primary/20 shadow-md">
            <CardContent className="pt-6 text-center">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Não encontrou o que procurava?</h3>
              <p className="text-muted-foreground mb-4">
                Nossa equipe de suporte está pronta para ajudar você!
              </p>
              <Link to="/suporte">
                <Button variant="hero">
                  Falar com o Suporte
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Ajuda;
