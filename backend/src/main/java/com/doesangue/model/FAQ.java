package com.doesangue.model;

import java.time.LocalDateTime;

public class FAQ {
    private int id;
    private String pergunta;
    private String resposta;
    private int visualizacoes;
    private LocalDateTime dataCriacao;
    private LocalDateTime ultimaAtualizacao;

    // Construtor
    public FAQ(int id, String pergunta, String resposta) {
        this.id = id;
        this.pergunta = pergunta;
        this.resposta = resposta;
        this.visualizacoes = 0;
        this.dataCriacao = LocalDateTime.now();
        this.ultimaAtualizacao = dataCriacao;
    }

    // Método lógico: exibir FAQ formatado
    public void exibirFAQ() {
        System.out.println("===== FAQ #" + id + " =====");
        System.out.println("Pergunta: " + pergunta);
        System.out.println("Resposta: " + resposta);
        System.out.println("Visualizações: " + visualizacoes);
        System.out.println("Criado em: " + dataCriacao);
        System.out.println("Última atualização: " + ultimaAtualizacao);
        System.out.println("===========================");
    }

    // Método lógico: atualizar resposta
    public void atualizarResposta(String novaResposta) {
        if (novaResposta != null && !novaResposta.trim().isEmpty()) {
            this.resposta = novaResposta;
            this.ultimaAtualizacao = LocalDateTime.now();
            System.out.println("Resposta do FAQ #" + id + " atualizada com sucesso.");
        } else {
            System.out.println("A nova resposta não pode ser vazia.");
        }
    }

    // Método lógico: registrar visualização
    public void registrarVisualizacao() {
        this.visualizacoes++;
    }

    // Método lógico: verificar se o FAQ é recente (criado há menos de 7 dias)
    public boolean isRecente() {
        return dataCriacao.isAfter(LocalDateTime.now().minusDays(7));
    }

    // Getters e Setters
    public int getId() { return id; }
    public String getPergunta() { return pergunta; }
    public String getResposta() { return resposta; }
    public int getVisualizacoes() { return visualizacoes; }
    public LocalDateTime getDataCriacao() { return dataCriacao; }
    public LocalDateTime getUltimaAtualizacao() { return ultimaAtualizacao; }

    public void setPergunta(String pergunta) {
        this.pergunta = pergunta;
        this.ultimaAtualizacao = LocalDateTime.now();
    }
}
