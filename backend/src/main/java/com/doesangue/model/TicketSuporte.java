package com.doesangue.model;

import java.time.LocalDateTime;

public class TicketSuporte {
    private int id;
    private String descricao;
    private String status;
    private String prioridade;
    private String tecnicoResponsavel;
    private LocalDateTime dataAbertura;
    private LocalDateTime dataFechamento;

    // Construtor
    public TicketSuporte(int id, String descricao, String prioridade) {
        this.id = id;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.status = "Aberto";
        this.dataAbertura = LocalDateTime.now();
        this.dataFechamento = null;
        this.tecnicoResponsavel = "Não atribuído";
    }

    // Métodos lógicos
    public void atribuirTecnico(String tecnico) {
        if (this.status.equalsIgnoreCase("Aberto")) {
            this.tecnicoResponsavel = tecnico;
            System.out.println("Técnico " + tecnico + " atribuído ao ticket #" + id);
        } else {
            System.out.println("Não é possível atribuir técnico. O ticket está fechado.");
        }
    }

    public void atualizarStatus(String novoStatus) {
        if (!this.status.equalsIgnoreCase("Fechado")) {
            this.status = novoStatus;
            System.out.println("Status do ticket #" + id + " atualizado para: " + novoStatus);
        } else {
            System.out.println("Não é possível atualizar. O ticket já foi fechado.");
        }
    }

    public void fecharTicket() {
        if (!this.status.equalsIgnoreCase("Fechado")) {
            this.status = "Fechado";
            this.dataFechamento = LocalDateTime.now();
            System.out.println("Ticket #" + id + " foi fechado com sucesso.");
        } else {
            System.out.println("Ticket #" + id + " já está fechado.");
        }
    }

    // Getters e Setters
    public int getId() { return id; }
    public String getDescricao() { return descricao; }
    public String getStatus() { return status; }
    public String getPrioridade() { return prioridade; }
    public String getTecnicoResponsavel() { return tecnicoResponsavel; }
    public LocalDateTime getDataAbertura() { return dataAbertura; }
    public LocalDateTime getDataFechamento() { return dataFechamento; }

    public void setDescricao(String descricao) { this.descricao = descricao; }
    public void setPrioridade(String prioridade) { this.prioridade = prioridade; }

    // Exibir informações
    public void exibirDetalhes() {
        System.out.println("===== Detalhes do Ticket =====");
        System.out.println("ID: " + id);
        System.out.println("Descrição: " + descricao);
        System.out.println("Prioridade: " + prioridade);
        System.out.println("Status: " + status);
        System.out.println("Técnico Responsável: " + tecnicoResponsavel);
        System.out.println("Data de Abertura: " + dataAbertura);
        if (dataFechamento != null)
            System.out.println("Data de Fechamento: " + dataFechamento);
        System.out.println("==============================");
    }
}
