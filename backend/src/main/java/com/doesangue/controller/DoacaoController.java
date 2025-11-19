package com.doesangue.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // ou "http://localhost:5173" se quiser restringir
public class DoacaoController {

    @PostMapping("/doacoes")
    public ResponseEntity<Map<String, String>> criarDoacao(@RequestBody AgendamentoRequest request) {
        // Aqui você pode depois salvar em banco se quiser
        System.out.println("Nova doação agendada:");
        System.out.println("Email:   " + request.getEmail());
        System.out.println("Data:    " + request.getData());
        System.out.println("Horário: " + request.getHorario());
        System.out.println("Local:   " + request.getLocal());
        System.out.println("Status:  " + request.getStatus());

        return ResponseEntity.ok(Map.of("message", "Doação agendada com sucesso"));
    }

    // DTO que casa com o JSON enviado pelo frontend
    public static class AgendamentoRequest {
        private String email;
        private String data;
        private String local;
        private String horario;
        private String status;

        public AgendamentoRequest() {}

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getData() { return data; }
        public void setData(String data) { this.data = data; }

        public String getLocal() { return local; }
        public void setLocal(String local) { this.local = local; }

        public String getHorario() { return horario; }
        public void setHorario(String horario) { this.horario = horario; }

        public String getStatus() { return status; }
        public void setStatus(String status) { this.status = status; }
    }
}
