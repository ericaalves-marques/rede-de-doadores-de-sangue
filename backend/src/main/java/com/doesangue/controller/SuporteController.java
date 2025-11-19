package com.doesangue.controller;

import com.doesangue.model.TicketSuporte;
import com.doesangue.service.SuporteService;

import java.util.List;

public class SuporteController {

    private SuporteService suporteService;

    public SuporteController(SuporteService suporteService) {
        this.suporteService = suporteService;
    }

    // Criar novo ticket
    public void criarTicket(TicketSuporte ticket) {
        suporteService.criarTicket(ticket);
    }

    // Atribuir técnico a um ticket
    public void atribuirTecnico(int ticketId, String tecnico) {
        suporteService.atribuirTecnico(ticketId, tecnico);
    }

    // Atualizar status do ticket
    public void atualizarStatus(int ticketId, String status) {
        suporteService.atualizarStatusTicket(ticketId, status);
    }

    // Fechar ticket
    public void fecharTicket(int ticketId) {
        suporteService.fecharTicket(ticketId);
    }

    // Listar todos tickets
    public List<TicketSuporte> listarTodosTickets() {
        return suporteService.listarTodosTickets();
    }

    // Listar tickets por status
    public List<TicketSuporte> listarTicketsPorStatus(String status) {
        return suporteService.listarTicketsPorStatus(status);
    }
}
