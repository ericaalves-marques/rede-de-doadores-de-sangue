import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Campanhas from "./pages/Campanhas";
import Agendar from "./pages/Agendar";
import Perfil from "./pages/Perfil";
import ConfirmacaoDoacao from "./pages/ConfirmacaoDoacao";
import Suporte from "./pages/Suporte";
import Ajuda from "./pages/Ajuda";
import Avaliacoes from "./pages/Avaliacoes";
import Relatorios from "./pages/Relatorios";
import NotFound from "./pages/NotFound";
import { useLayoutEffect } from "react";

if (typeof window !== "undefined") {
  // Corrige bug do Radix UI com React 18 em portais
  const portalRoot = document.getElementById("radix-portal") || document.createElement("div");
  portalRoot.id = "radix-portal";
  document.body.appendChild(portalRoot);
}


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campanhas" element={<Campanhas />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/confirmacao-doacao" element={<ConfirmacaoDoacao />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/avaliacoes" element={<Avaliacoes />} />
          <Route path="/relatorios" element={<Relatorios />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
