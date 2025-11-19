package com.doesangue.service;

import com.doesangue.model.Campanha;
import com.doesangue.repository.CampanhaRepository;

import java.util.List;

public class CampanhaService {

    private CampanhaRepository campanhaRepository;

    // Construtor
    public CampanhaService(CampanhaRepository campanhaRepository) {
        this.campanhaRepository = campanhaRepository;
    }

    // Criar nova campanha
    public void criarCampanha(Campanha campanha) {
        campanhaRepository.adicionarCampanha(campanha);
    }

    // Atualizar campanha
    public void atualizarCampanha(Campanha campanha) {
        campanhaRepository.atualizarCampanha(campanha);
    }

    // Deletar campanha
    public void deletarCampanha(long id) {
        campanhaRepository.deletarCampanha(id);
    }

    // Listar todas campanhas
    public List<Campanha> listarTodas() {
        return campanhaRepository.listarTodas();
    }

    // Listar campanhas por status
    public List<Campanha> listarPorStatus(boolean ativa) {
        return campanhaRepository.listarPorStatus(ativa);
    }

    // Ativar campanha por ID
    public void ativarCampanha(long id) {
        campanhaRepository.ativarCampanha(id);
    }

    // Desativar campanha por ID
    public void desativarCampanha(long id) {
        campanhaRepository.desativarCampanha(id);
    }
}
