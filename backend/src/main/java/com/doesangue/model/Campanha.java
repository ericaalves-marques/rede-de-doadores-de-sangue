package com.doesangue.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.time.Duration;

@Entity
@Table(name = "campanha")
public class Campanha {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String descricao;
    private LocalDateTime dataInicio;
    private LocalDateTime dataFim;
    private boolean ativa;

    public Campanha() {}

    public Campanha(String nome, String descricao, LocalDateTime dataInicio, LocalDateTime dataFim) {
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.ativa = LocalDateTime.now().isAfter(dataInicio) && LocalDateTime.now().isBefore(dataFim);
    }

    public void ativarCampanha() {
        if (!ativa) {
            if (LocalDateTime.now().isAfter(dataInicio) && LocalDateTime.now().isBefore(dataFim)) {
                ativa = true;
            }
        }
    }

    public void desativarCampanha() {
        this.ativa = false;
    }

    public long calcularDuracaoDias() {
        Duration duracao = Duration.between(dataInicio, dataFim);
        return duracao.toDays();
    }

    // Getters e Setters
    public Long getId() { return id; }
    public String getNome() { return nome; }
    public String getDescricao() { return descricao; }
    public LocalDateTime getDataInicio() { return dataInicio; }
    public LocalDateTime getDataFim() { return dataFim; }
    public boolean isAtiva() { return ativa; }

    public void setNome(String nome) { this.nome = nome; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public void setDataInicio(LocalDateTime dataInicio) { this.dataInicio = dataInicio; }
    public void setDataFim(LocalDateTime dataFim) { this.dataFim = dataFim; }
}
