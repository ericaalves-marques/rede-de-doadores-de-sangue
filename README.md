# Sistema de Doação de Sangue

## 📋 Sobre o Projeto

Sistema web completo para gerenciamento de doações de sangue, conectando doadores voluntários a bancos de sangue e hospitais de forma eficiente e segura.

## 🚀 Novas Funcionalidades Implementadas

### Frontend

#### 1. **Confirmação de Doação** (`/confirmacao-doacao`)
- Página de confirmação após agendamento bem-sucedido
- Exibição de protocolo e detalhes da doação
- Download de comprovante
- Compartilhamento em redes sociais
- Instruções importantes para o doador

#### 2. **Contato com Suporte** (`/suporte`)
- Formulário completo de contato
- Categorização de tickets (dúvida, problema técnico, sugestão, etc.)
- Informações de contato (telefone, e-mail, horários)
- Validação de formulário

#### 3. **Central de Ajuda** (`/ajuda`)
- Perguntas frequentes (FAQ) organizadas por categoria
- Sistema de busca para encontrar respostas
- Categorias: Doação, Cadastro, Agendamentos, Requisitos
- Link direto para suporte

#### 4. **Visualização de Avaliações** (`/avaliacoes`)
- Sistema de avaliação com estrelas (1-5)
- Lista de avaliações de outros doadores
- Estatísticas de satisfação
- Campo para comentários opcionais
- Sistema de likes em avaliações

#### 5. **Relatório de Campanhas** (`/relatorios`)
- Dashboard com métricas de campanhas
- Filtros por período e campanha específica
- Gráficos de desempenho
- Distribuição de doações por tipo sanguíneo
- Taxas de comparecimento e metas
- Exportação de relatórios

#### 6. **Notificações Automáticas**
- Componente `NotificationsPanel` integrado na Navbar
- Badge com contador de notificações não lidas
- Tipos de notificação: urgente, campanha, lembrete, info
- Marcar como lida individualmente ou todas de uma vez
- Remover notificações
- Design responsivo com painel dropdown

### Componentes Criados

- `ConfirmacaoDoacao.tsx` - Página de confirmação de doação
- `Suporte.tsx` - Página de contato com suporte
- `Ajuda.tsx` - Central de ajuda com FAQ
- `Avaliacoes.tsx` - Sistema de avaliações
- `Relatorios.tsx` - Dashboard de relatórios
- `NotificationsPanel.tsx` - Painel de notificações

### Rotas Adicionadas

```typescript
/confirmacao-doacao - Confirmação de doação agendada
/suporte - Contato com suporte
/ajuda - Central de ajuda
/avaliacoes - Sistema de avaliações
/relatorios - Relatórios de campanhas
```

## 🔧 Implementações Necessárias no Backend (Java Spring Boot)

### 1. API de Confirmação de Doação

```java
// Controller: ConfirmacaoDoacaoController.java

@GetMapping("/api/doacoes/{id}/confirmacao")
public ResponseEntity<DoacaoConfirmacao> buscarConfirmacao(@PathVariable Long id)

@PostMapping("/api/doacoes/{id}/comprovante")
public ResponseEntity<byte[]> gerarComprovante(@PathVariable Long id)
```

**Modelo de dados necessário:**
```java
public class DoacaoConfirmacao {
    private Long id;
    private String protocolo;
    private LocalDate data;
    private LocalTime horario;
    private String local;
    private String endereco;
    private String status;
}
```

### 2. API de Suporte

```java
// Controller: SuporteController.java

@PostMapping("/api/suporte/tickets")
public ResponseEntity<Ticket> criarTicket(@RequestBody TicketRequest request)

@GetMapping("/api/suporte/tickets/{usuarioId}")
public ResponseEntity<List<Ticket>> listarTickets(@PathVariable Long usuarioId)

@PutMapping("/api/suporte/tickets/{id}/responder")
public ResponseEntity<Ticket> responderTicket(@PathVariable Long id, @RequestBody RespostaRequest request)
```

**Modelos necessários:**
```java
public class Ticket {
    private Long id;
    private Long usuarioId;
    private String nome;
    private String email;
    private String telefone;
    private String categoria; // ENUM: DUVIDA, AGENDAMENTO, CADASTRO, TECNICO, SUGESTAO, OUTRO
    private String assunto;
    private String mensagem;
    private String status; // ENUM: ABERTO, EM_ANDAMENTO, RESOLVIDO, FECHADO
    private LocalDateTime dataCriacao;
    private LocalDateTime dataAtualizacao;
}
```

### 3. API de Avaliações

```java
// Controller: AvaliacaoController.java

@PostMapping("/api/avaliacoes")
public ResponseEntity<Avaliacao> criarAvaliacao(@RequestBody AvaliacaoRequest request)

@GetMapping("/api/avaliacoes")
public ResponseEntity<Page<Avaliacao>> listarAvaliacoes(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "10") int size
)

@GetMapping("/api/avaliacoes/estatisticas")
public ResponseEntity<EstatisticasAvaliacao> obterEstatisticas()

@PostMapping("/api/avaliacoes/{id}/like")
public ResponseEntity<Void> darLike(@PathVariable Long id)
```

**Modelos necessários:**
```java
public class Avaliacao {
    private Long id;
    private Long usuarioId;
    private String nomeUsuario;
    private Integer rating; // 1-5
    private String comentario;
    private String local;
    private LocalDateTime data;
    private Integer likes;
}

public class EstatisticasAvaliacao {
    private Double mediaAvaliacao;
    private Long totalAvaliacoes;
    private Integer porcentagemSatisfacao;
    private Long totalReconhecimentos;
}
```

### 4. API de Relatórios

```java
// Controller: RelatorioController.java

@GetMapping("/api/relatorios/estatisticas")
public ResponseEntity<EstatisticasGerais> obterEstatisticas(
    @RequestParam String periodo // SEMANA, MES, TRIMESTRE, ANO
)

@GetMapping("/api/relatorios/campanhas")
public ResponseEntity<List<RelatorioCampanha>> obterRelatorioCampanhas(
    @RequestParam(required = false) Long campanhaId,
    @RequestParam String periodo
)

@GetMapping("/api/relatorios/tipos-sanguineos")
public ResponseEntity<List<DistribuicaoTipoSanguineo>> obterDistribuicao(
    @RequestParam String periodo
)

@GetMapping("/api/relatorios/exportar")
public ResponseEntity<byte[]> exportarRelatorio(
    @RequestParam String periodo,
    @RequestParam(required = false) Long campanhaId,
    @RequestParam String formato // PDF, EXCEL
)
```

**Modelos necessários:**
```java
public class EstatisticasGerais {
    private Long totalDoacoes;
    private String mudancaDoacoes; // "+12%"
    private Long doadoresAtivos;
    private String mudancaDoadores;
    private Double taxaComparecimento;
    private String mudancaTaxa;
    private Integer novasCampanhas;
    private String mudancaCampanhas;
}

public class RelatorioCampanha {
    private Long id;
    private String nome;
    private String periodo;
    private Integer meta;
    private Integer alcancado;
    private Integer doadores;
    private List<String> locais;
}

public class DistribuicaoTipoSanguineo {
    private String tipo;
    private Integer quantidade;
    private Integer porcentagem;
}
```

### 5. API de Notificações

```java
// Controller: NotificacaoController.java

@GetMapping("/api/notificacoes/{usuarioId}")
public ResponseEntity<List<Notificacao>> listarNotificacoes(@PathVariable Long usuarioId)

@PutMapping("/api/notificacoes/{id}/ler")
public ResponseEntity<Void> marcarComoLida(@PathVariable Long id)

@PutMapping("/api/notificacoes/{usuarioId}/ler-todas")
public ResponseEntity<Void> marcarTodasComoLidas(@PathVariable Long usuarioId)

@DeleteMapping("/api/notificacoes/{id}")
public ResponseEntity<Void> removerNotificacao(@PathVariable Long id)

@PostMapping("/api/notificacoes/enviar")
public ResponseEntity<Void> enviarNotificacao(@RequestBody NotificacaoRequest request)
```

**Modelos necessários:**
```java
public class Notificacao {
    private Long id;
    private Long usuarioId;
    private String tipo; // ENUM: URGENTE, CAMPANHA, LEMBRETE, INFO
    private String titulo;
    private String mensagem;
    private LocalDateTime data;
    private Boolean lida;
}
```

**Sistema de notificações automáticas (agendado):**
```java
@Scheduled(cron = "0 0 9 * * *") // Todo dia às 9h
public void verificarEEnviarNotificacoes() {
    // Verificar doadores elegíveis para nova doação
    // Verificar urgências de sangue
    // Enviar lembretes de agendamentos
}
```

## 📊 Banco de Dados - Novas Tabelas

### Tabela: tickets_suporte
```sql
CREATE TABLE tickets_suporte (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    usuario_id BIGINT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    categoria VARCHAR(20) NOT NULL,
    assunto VARCHAR(200) NOT NULL,
    mensagem TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'ABERTO',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```

### Tabela: avaliacoes
```sql
CREATE TABLE avaliacoes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    usuario_id BIGINT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comentario TEXT,
    local VARCHAR(200),
    likes INT DEFAULT 0,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```

### Tabela: notificacoes
```sql
CREATE TABLE notificacoes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    usuario_id BIGINT NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    mensagem TEXT NOT NULL,
    lida BOOLEAN DEFAULT FALSE,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```

### Índices Recomendados
```sql
CREATE INDEX idx_tickets_usuario ON tickets_suporte(usuario_id);
CREATE INDEX idx_tickets_status ON tickets_suporte(status);
CREATE INDEX idx_avaliacoes_usuario ON avaliacoes(usuario_id);
CREATE INDEX idx_notificacoes_usuario ON notificacoes(usuario_id);
CREATE INDEX idx_notificacoes_lida ON notificacoes(lida);
```

## 🎨 Página Sobre - Melhorias Sugeridas

A página `/sobre` está funcional, mas pode ser aprimorada com:

### Sugestões de Implementação:

1. **Adicionar link para novas páginas no footer:**
```tsx
// No footer de About.tsx, adicionar:
<div>
  <h3 className="font-semibold mb-4">Suporte</h3>
  <ul className="space-y-2 text-sm text-muted-foreground">
    <li><Link to="/ajuda" className="hover:text-primary">Central de Ajuda</Link></li>
    <li><Link to="/suporte" className="hover:text-primary">Contato</Link></li>
    <li><Link to="/avaliacoes" className="hover:text-primary">Avaliações</Link></li>
  </ul>
</div>
```

2. **Integrar avaliações reais:**
```tsx
// Buscar avaliações da API ao invés de usar dados mockados
useEffect(() => {
  const fetchAvaliacoes = async () => {
    const response = await fetch('/api/avaliacoes?page=0&size=3');
    const data = await response.json();
    setAvaliacoes(data.content);
  };
  fetchAvaliacoes();
}, []);
```

3. **Adicionar seção de depoimentos:**
```tsx
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      Depoimentos de Doadores
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {/* Renderizar avaliações com melhor destaque visual */}
    </div>
    <div className="text-center mt-8">
      <Link to="/avaliacoes">
        <Button variant="outline">Ver Todas as Avaliações</Button>
      </Link>
    </div>
  </div>
</section>
```

## 📱 Funcionalidades Implementadas

### Sistema de Design
- Todas as páginas seguem o design system do projeto
- Uso consistente de cores semânticas (primary, accent, etc.)
- Componentes responsivos para mobile
- Animações suaves com animate-in
- Cards com sombras e efeitos hover

### UX/UI
- Feedback visual com toasts
- Loading states
- Empty states
- Validação de formulários
- Navegação intuitiva

### Acessibilidade
- Labels em todos os inputs
- Aria-labels nos botões
- Contraste adequado de cores
- Navegação por teclado

## 🔐 Segurança

### Frontend
- Validação de autenticação em páginas protegidas
- Sanitização de inputs
- CSRF protection considerado

### Backend (a implementar)
- Validação de dados em todos os endpoints
- Autenticação JWT
- Rate limiting em endpoints públicos
- Sanitização de SQL (usar PreparedStatements)
- CORS configurado adequadamente

## 🚀 Como Executar

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend (quando implementado)
```bash
cd backend
mvn spring-boot:run
```

## 📝 Próximos Passos

1. Implementar todos os endpoints listados acima no backend
2. Criar jobs agendados para notificações automáticas
3. Implementar sistema de e-mail para confirmações
4. Adicionar testes unitários e de integração
5. Configurar CI/CD
6. Implementar cache para relatórios
7. Adicionar websockets para notificações em tempo real

## 🤝 Contribuindo

Para contribuir com o projeto:
1. Fork o repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
