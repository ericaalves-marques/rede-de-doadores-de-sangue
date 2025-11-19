package com.doesangue.controller;

import com.doesangue.model.Notificacao;
import com.doesangue.service.NotificacaoService;

import java.util.List;

public class NotificacaoController {

    private NotificacaoService notificacaoService;

    public NotificacaoController(NotificacaoService notificacaoService) {
        this.notificacaoService = notificacaoService;
    }

    // Criar nova notificação
    public void criarNotificacao(Notificacao notificacao) {
        notificacaoService.criarNotificacao(notificacao);
    }

    // Listar notificações de um usuário
    public List<Notificacao> listarPorUsuario(int usuarioId) {
        return notificacaoService.listarPorUsuario(usuarioId);
    }

    // Marcar notificação como lida
    public void marcarComoLida(int notificacaoId) {
        notificacaoService.marcarComoLida(notificacaoId);
    }

    // Reenviar notificação
    public void reenviarNotificacao(int notificacaoId) {
        notificacaoService.reenviarNotificacao(notificacaoId);
    }

    // Listar todas notificações
    public List<Notificacao> listarTodas() {
        return notificacaoService.listarTodas();
    }
}
