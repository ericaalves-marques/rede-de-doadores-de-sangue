package com.doesangue.repository;

import com.doesangue.model.TicketSuporte;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class TicketSuporteRepository {

    private List<TicketSuporte> tickets;

    // Construtor
    public TicketSuporteRepository() {
        this.tickets = new ArrayList<>();
    }

    // Criar / adicionar ticket
    public void adicionarTicket(TicketSuporte ticket) {
        tickets.add(ticket);
        System.out.println("Ticket #" + ticket.getId() + " adicionado ao repositório.");
    }

    // Buscar ticket por ID
    public Optional<TicketSuporte> buscarTicketPorId(int id) {
        return tickets.stream()
                .filter(ticket -> ticket.getId() == id)
                .findFirst();
    }

    // Atualizar ticket (substituindo por um novo objeto)
    public void atualizarTicket(TicketSuporte ticketAtualizado) {
        Optional<TicketSuporte> ticketExistente = buscarTicketPorId(ticketAtualizado.getId());
        if (ticketExistente.isPresent()) {
            tickets.remove(ticketExistente.get());
            tickets.add(ticketAtualizado);
            System.out.println("Ticket #" + ticketAtualizado.getId() + " atualizado com sucesso.");
        } else {
            System.out.println("Ticket #" + ticketAtualizado.getId() + " não encontrado.");
        }
    }

    // Deletar ticket
    public void deletarTicket(int id) {
        Optional<TicketSuporte> ticket = buscarTicketPorId(id);
        if (ticket.isPresent()) {
            tickets.remove(ticket.get());
            System.out.println("Ticket #" + id + " removido do repositório.");
        } else {
            System.out.println("Ticket #" + id + " não encontrado.");
        }
    }

    // Listar todos os tickets
    public List<TicketSuporte> listarTodosTickets() {
        return new ArrayList<>(tickets);
    }

    // Listar tickets por status
    public List<TicketSuporte> listarTicketsPorStatus(String status) {
        List<TicketSuporte> filtrados = new ArrayList<>();
        for (TicketSuporte t : tickets) {
            if (t.getStatus().equalsIgnoreCase(status)) {
                filtrados.add(t);
            }
        }
        return filtrados;
    }
}
