package com.doesangue.controller;

import com.doesangue.model.Campanha;
import com.doesangue.service.CampanhaService;

import java.util.List;

public class CampanhaController {

    private CampanhaService campanhaService;

    public CampanhaController(CampanhaService campanhaService) {
        this.campanhaService = campanhaService;
    }

    // Criar nova campanha
    public void criarCampanha(Campanha campanha) {
        campanhaService.criarCampanha(campanha);
    }

    // Atualizar campanha existente
    public void atualizarCampanha(Campanha campanha) {
        campanhaService.atualizarCampanha(campanha);
    }

    // Deletar campanha
    public void deletarCampanha(int id) {
        campanhaService.deletarCampanha(id);
    }

    // Listar todas campanhas
    public List<Campanha> listarTodas() {
        return campanhaService.listarTodas();
    }

    // Listar campanhas por status
    public List<Campanha> listarPorStatus(boolean ativa) {
        return campanhaService.listarPorStatus(ativa);
    }

    // Ativar campanha
    public void ativarCampanha(int id) {
        campanhaService.ativarCampanha(id);
    }

    // Desativar campanha
    public void desativarCampanha(int id) {
        campanhaService.desativarCampanha(id);
    }
}
