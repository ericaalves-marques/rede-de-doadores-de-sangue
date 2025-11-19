package com.doesangue.service;

import com.doesangue.model.TicketSuporte;
import com.doesangue.repository.TicketSuporteRepository;

import java.util.List;
import java.util.Optional;

public class SuporteService {

    private TicketSuporteRepository ticketRepository;

    // Construtor
    public SuporteService(TicketSuporteRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    // Criar novo ticket
    public void criarTicket(TicketSuporte ticket) {
        ticketRepository.adicionarTicket(ticket);
    }

    // Atribuir técnico a um ticket
    public void atribuirTecnico(int ticketId, String tecnico) {
        Optional<TicketSuporte> ticketOpt = ticketRepository.buscarTicketPorId(ticketId);
        if (ticketOpt.isPresent()) {
            ticketOpt.get().atribuirTecnico(tecnico);
            ticketRepository.atualizarTicket(ticketOpt.get());
        } else {
            System.out.println("Ticket #" + ticketId + " não encontrado.");
        }
    }

    // Atualizar status do ticket
    public void atualizarStatusTicket(int ticketId, String novoStatus) {
        Optional<TicketSuporte> ticketOpt = ticketRepository.buscarTicketPorId(ticketId);
        if (ticketOpt.isPresent()) {
            ticketOpt.get().atualizarStatus(novoStatus);
            ticketRepository.atualizarTicket(ticketOpt.get());
        } else {
            System.out.println("Ticket #" + ticketId + " não encontrado.");
        }
    }

    // Fechar ticket
    public void fecharTicket(int ticketId) {
        Optional<TicketSuporte> ticketOpt = ticketRepository.buscarTicketPorId(ticketId);
        if (ticketOpt.isPresent()) {
            ticketOpt.get().fecharTicket();
            ticketRepository.atualizarTicket(ticketOpt.get());
        } else {
            System.out.println("Ticket #" + ticketId + " não encontrado.");
        }
    }

    // Listar todos tickets
    public List<TicketSuporte> listarTodosTickets() {
        return ticketRepository.listarTodosTickets();
    }

    // Listar tickets por status
    public List<TicketSuporte> listarTicketsPorStatus(String status) {
        return ticketRepository.listarTicketsPorStatus(status);
    }
}
