package com.doesangue.model;

import java.time.Duration;
import java.time.LocalDateTime;

public class Notificacao {
    private int id;
    private int usuarioId;
    private String mensagem;
    private LocalDateTime dataEnvio;
    private boolean lida;

    // Construtor
    public Notificacao(int id, int usuarioId, String mensagem) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.mensagem = mensagem;
        this.dataEnvio = LocalDateTime.now();
        this.lida = false;
    }

    // Método lógico: marcar como lida
    public void marcarComoLida() {
        if (!this.lida) {
            this.lida = true;
            System.out.println("Notificação #" + id + " marcada como lida.");
        } else {
            System.out.println("A notificação #" + id + " já estava marcada como lida.");
        }
    }

    // Método lógico: exibir notificação formatada
    public void exibirNotificacao() {
        System.out.println("===== Notificação =====");
        System.out.println("ID: " + id);
        System.out.println("Usuário ID: " + usuarioId);
        System.out.println("Mensagem: " + mensagem);
        System.out.println("Data de envio: " + dataEnvio);
        System.out.println("Status: " + (lida ? "Lida" : "Não lida"));
        System.out.println("=======================");
    }

    // Método lógico: verificar tempo desde o envio
    public long minutosDesdeEnvio() {
        Duration duracao = Duration.between(dataEnvio, LocalDateTime.now());
        return duracao.toMinutes();
    }

    // Método lógico: reenviar notificação
    public void reenviar() {
        this.dataEnvio = LocalDateTime.now();
        this.lida = false;
        System.out.println("Notificação #" + id + " reenviada ao usuário " + usuarioId);
    }

    // Getters
    public int getId() { return id; }
    public int getUsuarioId() { return usuarioId; }
    public String getMensagem() { return mensagem; }
    public LocalDateTime getDataEnvio() { return dataEnvio; }
    public boolean isLida() { return lida; }
}
