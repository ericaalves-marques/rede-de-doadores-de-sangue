package com.doesangue.repository;

import com.doesangue.model.Notificacao;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class NotificacaoRepository {

    private List<Notificacao> notificacoes;

    // Construtor
    public NotificacaoRepository() {
        this.notificacoes = new ArrayList<>();
    }

    // Adicionar notificação
    public void adicionarNotificacao(Notificacao notificacao) {
        notificacoes.add(notificacao);
        System.out.println("Notificação #" + notificacao.getId() + " adicionada.");
    }

    // Buscar notificação por ID
    public Optional<Notificacao> buscarPorId(int id) {
        return notificacoes.stream()
                .filter(n -> n.getId() == id)
                .findFirst();
    }

    // Atualizar notificação (substituindo o objeto)
    public void atualizarNotificacao(Notificacao notificacaoAtualizada) {
        Optional<Notificacao> existente = buscarPorId(notificacaoAtualizada.getId());
        if (existente.isPresent()) {
            notificacoes.remove(existente.get());
            notificacoes.add(notificacaoAtualizada);
            System.out.println("Notificação #" + notificacaoAtualizada.getId() + " atualizada.");
        } else {
            System.out.println("Notificação #" + notificacaoAtualizada.getId() + " não encontrada.");
        }
    }

    // Deletar notificação
    public void deletarNotificacao(int id) {
        Optional<Notificacao> notificacao = buscarPorId(id);
        if (notificacao.isPresent()) {
            notificacoes.remove(notificacao.get());
            System.out.println("Notificação #" + id + " removida.");
        } else {
            System.out.println("Notificação #" + id + " não encontrada.");
        }
    }

    // Listar todas notificações
    public List<Notificacao> listarTodas() {
        return new ArrayList<>(notificacoes);
    }

    // Listar notificações por usuário
    public List<Notificacao> listarPorUsuario(int usuarioId) {
        List<Notificacao> filtradas = new ArrayList<>();
        for (Notificacao n : notificacoes) {
            if (n.getUsuarioId() == usuarioId) {
                filtradas.add(n);
            }
        }
        return filtradas;
    }

    // Marcar notificação como lida por ID
    public void marcarComoLida(int id) {
        Optional<Notificacao> notificacao = buscarPorId(id);
        if (notificacao.isPresent()) {
            notificacao.get().marcarComoLida();
        } else {
            System.out.println("Notificação #" + id + " não encontrada.");
        }
    }
}
