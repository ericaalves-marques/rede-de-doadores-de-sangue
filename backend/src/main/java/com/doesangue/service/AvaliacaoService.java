package com.doesangue.service;

import com.doesangue.model.Avaliacao;
import com.doesangue.repository.AvaliacaoRepository;

import java.util.List;
import java.util.Optional;

public class AvaliacaoService {

    private AvaliacaoRepository avaliacaoRepository;

    // Construtor
    public AvaliacaoService(AvaliacaoRepository avaliacaoRepository) {
        this.avaliacaoRepository = avaliacaoRepository;
    }

    // Criar nova avaliação
    public void criarAvaliacao(Avaliacao avaliacao) {
        avaliacaoRepository.adicionarAvaliacao(avaliacao);
    }

    // Atualizar avaliação
    public void atualizarAvaliacao(Avaliacao avaliacao) {
        avaliacaoRepository.atualizarAvaliacao(avaliacao);
    }

    // Deletar avaliação
    public void deletarAvaliacao(int id) {
        avaliacaoRepository.deletarAvaliacao(id);
    }

    // Listar todas avaliações
    public List<Avaliacao> listarTodas() {
        return avaliacaoRepository.listarTodasAvaliacoes();
    }

    // Listar avaliações por ticket
    public List<Avaliacao> listarPorTicket(int ticketId) {
        return avaliacaoRepository.listarPorTicketId(ticketId);
    }

    // Calcular média de notas de um ticket
    public double calcularMediaPorTicket(int ticketId) {
        List<Avaliacao> avaliacoes = listarPorTicket(ticketId);
        if (avaliacoes.isEmpty()) return 0.0;

        double soma = 0.0;
        for (Avaliacao a : avaliacoes) {
            soma += a.getNota();
        }
        return soma / avaliacoes.size();
    }
}
