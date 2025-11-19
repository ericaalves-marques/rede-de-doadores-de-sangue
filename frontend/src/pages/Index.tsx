import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Bem-vindo ao Futuro
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Transforme suas ideias em realidade com soluções tecnológicas inovadoras e de alta qualidade.
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="group" asChild>
              <Link to="/sobre">
                Conheça-nos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/sobre">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
