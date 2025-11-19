package com.doesangue.controller;

import com.doesangue.model.FAQ;
import com.doesangue.service.FAQService;

import java.util.List;

public class FAQController {

    private FAQService faqService;

    public FAQController(FAQService faqService) {
        this.faqService = faqService;
    }

    // Criar nova FAQ
    public void criarFAQ(FAQ faq) {
        faqService.criarFAQ(faq);
    }

    // Atualizar FAQ existente
    public void atualizarFAQ(FAQ faq) {
        faqService.atualizarFAQ(faq);
    }

    // Deletar FAQ
    public void deletarFAQ(int id) {
        faqService.deletarFAQ(id);
    }

    // Listar todas FAQs
    public List<FAQ> listarTodas() {
        return faqService.listarTodas();
    }

    // Registrar visualização de uma FAQ
    public void registrarVisualizacao(int id) {
        faqService.registrarVisualizacao(id);
    }

    // Listar FAQs recentes
    public List<FAQ> listarRecentes() {
        return faqService.listarRecentes();
    }
}
