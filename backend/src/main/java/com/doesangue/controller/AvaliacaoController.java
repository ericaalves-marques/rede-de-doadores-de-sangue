package com.doesangue.controller;

import com.doesangue.model.Avaliacao;
import com.doesangue.service.AvaliacaoService;

import java.util.List;

public class AvaliacaoController {

    private AvaliacaoService avaliacaoService;

    public AvaliacaoController(AvaliacaoService avaliacaoService) {
        this.avaliacaoService = avaliacaoService;
    }

    // Criar nova avaliação
    public void criarAvaliacao(Avaliacao avaliacao) {
        avaliacaoService.criarAvaliacao(avaliacao);
    }

    // Atualizar avaliação existente
    public void atualizarAvaliacao(Avaliacao avaliacao) {
        avaliacaoService.atualizarAvaliacao(avaliacao);
    }

    // Deletar avaliação
    public void deletarAvaliacao(int id) {
        avaliacaoService.deletarAvaliacao(id);
    }

    // Listar todas avaliações
    public List<Avaliacao> listarTodas() {
        return avaliacaoService.listarTodas();
    }

    // Listar avaliações por ticket
    public List<Avaliacao> listarPorTicket(int ticketId) {
        return avaliacaoService.listarPorTicket(ticketId);
    }

    // Calcular média de avaliações de um ticket
    public double calcularMedia(int ticketId) {
        return avaliacaoService.calcularMediaPorTicket(ticketId);
    }
}
