package com.doesangue.service;

import com.doesangue.model.Notificacao;
import com.doesangue.repository.NotificacaoRepository;

import java.util.List;

public class NotificacaoService {

    private NotificacaoRepository notificacaoRepository;

    // Construtor
    public NotificacaoService(NotificacaoRepository notificacaoRepository) {
        this.notificacaoRepository = notificacaoRepository;
    }

    // Criar nova notificação
    public void criarNotificacao(Notificacao notificacao) {
        notificacaoRepository.adicionarNotificacao(notificacao);
    }

    // Listar todas notificações de um usuário
    public List<Notificacao> listarPorUsuario(int usuarioId) {
        return notificacaoRepository.listarPorUsuario(usuarioId);
    }

    // Marcar notificação como lida
    public void marcarComoLida(int notificacaoId) {
        notificacaoRepository.marcarComoLida(notificacaoId);
    }

    // Reenviar notificação (atualiza data e status)
    public void reenviarNotificacao(int notificacaoId) {
        var notificacaoOpt = notificacaoRepository.buscarPorId(notificacaoId);
        if (notificacaoOpt.isPresent()) {
            notificacaoOpt.get().reenviar();
            notificacaoRepository.atualizarNotificacao(notificacaoOpt.get());
        } else {
            System.out.println("Notificação #" + notificacaoId + " não encontrada.");
        }
    }

    // Listar todas notificações
    public List<Notificacao> listarTodas() {
        return notificacaoRepository.listarTodas();
    }
}
