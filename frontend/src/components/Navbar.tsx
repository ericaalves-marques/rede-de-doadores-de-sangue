import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { NotificationsPanel } from "./NotificationsPanel";

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mock auth state - será substituído pela integração real com Java backend
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/";
  };

  const navItems = isAuthenticated ? [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/campanhas", label: "Campanhas" },
    { path: "/agendar", label: "Agendar Doação" },
    { path: "/perfil", label: "Meu Perfil" },
  ] : [
    { path: "/", label: "Início" },
    { path: "/sobre", label: "Sobre" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="rounded-full bg-primary p-2">
              <Heart className="h-5 w-5 text-primary-foreground fill-current" />
            </div>
            <span className="hidden sm:inline">Doe Sangue</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <NotificationsPanel />
                <Button variant="outline" onClick={handleLogout}>
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Entrar</Button>
                </Link>
                <Link to="/cadastro">
                  <Button variant="hero">Cadastrar</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              {isAuthenticated ? (
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  Sair
                </Button>
              ) : (
                <>
                  <Link to="/login" className="block">
                    <Button variant="ghost" className="w-full">Entrar</Button>
                  </Link>
                  <Link to="/cadastro" className="block">
                    <Button variant="hero" className="w-full">Cadastrar</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
