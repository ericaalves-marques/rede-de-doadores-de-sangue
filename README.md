Sistema de Doação de Sangue
📋 Sobre o Projeto

Plataforma web desenvolvida para facilitar o cadastro de doadores, login, visualização de informações sobre doação e realização de agendamentos. O objetivo é conectar doadores a centros de coleta de forma rápida e eficiente.

🚀 Funcionalidades Implementadas
EPIC 1 – Autenticação e Base do Sistema

Cadastro de usuário

Login com persistência de sessão

Navegação autenticada

Página inicial com informações sobre a doação de sangue

Design responsivo e acessível

EPIC 2 – Agendamentos e Estrutura do Sistema

Página de Agendamento de Doação

Seleção de data, horário e local

Resumo das informações escolhidas

Integração com backend (endpoint de criação de doação)

Página de Sobre, apresentando o projeto e sua missão

Obs.: A funcionalidade de confirmar o agendamento ainda está em desenvolvimento.

🎨 Interface e Experiência do Usuário

Componentes reutilizáveis (Navbar, Cards, Botões, Selects, Calendário)

Layout responsivo

Feedback visual com toasts

Interface moderna e limpos seguindo um design system padronizado

🗄️ Banco de Dados

O projeto utiliza MySQL para armazenar:

Usuários

Agendamentos

Dados relacionados ao processo de doação

A estrutura inclui tabelas para usuários e doações, permitindo integração com o backend Java Spring Boot.

🧩 Tecnologias Utilizadas
Frontend

React + Vite

TypeScript

TailwindCSS

Shadcn/UI

Lucide Icons

Backend 

Java 17

Spring Boot

JPA / Hibernate

MySQL
