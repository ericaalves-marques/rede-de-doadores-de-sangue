package com.doesangue.model;

import java.time.LocalDateTime;

public class Avaliacao {
    private int id;
    private int ticketId;
    private int nota; // de 1 a 5
    private String comentario;
    private LocalDateTime dataAvaliacao;

    // Construtor
    public Avaliacao(int id, int ticketId, int nota, String comentario) {
        this.id = id;
        this.ticketId = ticketId;
        this.setNota(nota); // usa o método lógico de validação
        this.comentario = comentario;
        this.dataAvaliacao = LocalDateTime.now();
    }

    // Método lógico: validar nota
    public void setNota(int nota) {
        if (nota < 1 || nota > 5) {
            System.out.println("Nota inválida! A nota deve estar entre 1 e 5.");
            this.nota = 3; // valor padrão neutro
        } else {
            this.nota = nota;
        }
    }

    // Método lógico: atualizar comentário
    public void atualizarComentario(String novoComentario) {
        if (novoComentario != null && !novoComentario.trim().isEmpty()) {
            this.comentario = novoComentario;
            System.out.println("Comentário atualizado com sucesso para a avaliação #" + id);
        } else {
            System.out.println("Comentário não pode ser vazio.");
        }
    }

    // Método lógico: exibir avaliação
    public void exibirAvaliacao() {
        System.out.println("===== Avaliação =====");
        System.out.println("ID Avaliação: " + id);
        System.out.println("Ticket ID: " + ticketId);
        System.out.println("Nota: " + nota + " estrelas");
        System.out.println("Comentário: " + comentario);
        System.out.println("Data da Avaliação: " + dataAvaliacao);
        System.out.println("=====================");
    }

    // Getters
    public int getId() { return id; }
    public int getTicketId() { return ticketId; }
    public int getNota() { return nota; }
    public String getComentario() { return comentario; }
    public LocalDateTime getDataAvaliacao() { return dataAvaliacao; }
}
