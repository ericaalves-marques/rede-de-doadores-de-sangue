package com.doesangue.repository;

import com.doesangue.model.Avaliacao;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class AvaliacaoRepository {

    private List<Avaliacao> avaliacoes;

    // Construtor
    public AvaliacaoRepository() {
        this.avaliacoes = new ArrayList<>();
    }

    // Adicionar avaliação
    public void adicionarAvaliacao(Avaliacao avaliacao) {
        avaliacoes.add(avaliacao);
        System.out.println("Avaliação #" + avaliacao.getId() + " adicionada.");
    }

    // Buscar avaliação por ID
    public Optional<Avaliacao> buscarPorId(int id) {
        return avaliacoes.stream()
                .filter(a -> a.getId() == id)
                .findFirst();
    }

    // Atualizar avaliação (substituir objeto)
    public void atualizarAvaliacao(Avaliacao avaliacaoAtualizada) {
        Optional<Avaliacao> avaliacaoExistente = buscarPorId(avaliacaoAtualizada.getId());
        if (avaliacaoExistente.isPresent()) {
            avaliacoes.remove(avaliacaoExistente.get());
            avaliacoes.add(avaliacaoAtualizada);
            System.out.println("Avaliação #" + avaliacaoAtualizada.getId() + " atualizada.");
        } else {
            System.out.println("Avaliação #" + avaliacaoAtualizada.getId() + " não encontrada.");
        }
    }

    // Deletar avaliação
    public void deletarAvaliacao(int id) {
        Optional<Avaliacao> avaliacao = buscarPorId(id);
        if (avaliacao.isPresent()) {
            avaliacoes.remove(avaliacao.get());
            System.out.println("Avaliação #" + id + " removida.");
        } else {
            System.out.println("Avaliação #" + id + " não encontrada.");
        }
    }

    // Listar todas avaliações
    public List<Avaliacao> listarTodasAvaliacoes() {
        return new ArrayList<>(avaliacoes);
    }

    // Listar avaliações por ticket
    public List<Avaliacao> listarPorTicketId(int ticketId) {
        List<Avaliacao> filtradas = new ArrayList<>();
        for (Avaliacao a : avaliacoes) {
            if (a.getTicketId() == ticketId) {
                filtradas.add(a);
            }
        }
        return filtradas;
    }
}
