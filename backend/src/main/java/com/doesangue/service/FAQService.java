package com.doesangue.service;

import com.doesangue.model.FAQ;
import com.doesangue.repository.FAQRepository;

import java.util.List;

public class FAQService {

    private FAQRepository faqRepository;

    // Construtor
    public FAQService(FAQRepository faqRepository) {
        this.faqRepository = faqRepository;
    }

    // Criar nova FAQ
    public void criarFAQ(FAQ faq) {
        faqRepository.adicionarFAQ(faq);
    }

    // Atualizar FAQ
    public void atualizarFAQ(FAQ faq) {
        faqRepository.atualizarFAQ(faq);
    }

    // Deletar FAQ
    public void deletarFAQ(int id) {
        faqRepository.deletarFAQ(id);
    }

    // Listar todas FAQs
    public List<FAQ> listarTodas() {
        return faqRepository.listarTodas();
    }

    // Registrar visualização de uma FAQ
    public void registrarVisualizacao(int id) {
        faqRepository.registrarVisualizacao(id);
    }

    // Listar FAQs recentes
    public List<FAQ> listarRecentes() {
        return faqRepository.listarRecentes();
    }
}
