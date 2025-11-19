🩸 Doe Sangue — Sistema de Agendamento e Cadastro de Doadores

Plataforma web criada para facilitar o processo de cadastro, login e agendamento de doações de sangue. O projeto conecta doadores a centros de coleta, tornando o processo mais rápido, intuitivo e acessível.

✨ Funcionalidades Implementadas
🔐 EPIC 1 — Autenticação e Base do Sistema

Cadastro de usuários

Login com validação e persistência

Navegação protegida

Página inicial com informações sobre doação

Interface responsiva

📅 EPIC 2 — Agendamento

Seleção de data, horário e local

Resumo das informações da doação

Envio de agendamento ao backend

Página “Sobre” explicando o sistema



🖥️ Frontend (React + Vite)

React com TypeScript

TailwindCSS

Shadcn/UI

Hooks personalizados

Toasts de feedback

Componentes reutilizáveis (Navbar, Cards, Calendário, Selects)

🛠️ Backend (Java + Spring Boot)

API REST para cadastro, login e doações

JPA / Hibernate

MySQL

Validação e persistência dos dados

🗄️ Banco de Dados

Estrutura contendo:

Tabela de usuários

Tabela de doações

Relacionamento baseado no usuarioId

O banco é integrado ao backend via JPA.
