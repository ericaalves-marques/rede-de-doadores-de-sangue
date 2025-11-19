package com.doesangue.repository;

import com.doesangue.model.FAQ;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class FAQRepository {

    private List<FAQ> faqs;

    // Construtor
    public FAQRepository() {
        this.faqs = new ArrayList<>();
    }

    // Adicionar FAQ
    public void adicionarFAQ(FAQ faq) {
        faqs.add(faq);
        System.out.println("FAQ #" + faq.getId() + " adicionada.");
    }

    // Buscar FAQ por ID
    public Optional<FAQ> buscarPorId(int id) {
        return faqs.stream()
                .filter(f -> f.getId() == id)
                .findFirst();
    }

    // Atualizar FAQ
    public void atualizarFAQ(FAQ faqAtualizada) {
        Optional<FAQ> existente = buscarPorId(faqAtualizada.getId());
        if (existente.isPresent()) {
            faqs.remove(existente.get());
            faqs.add(faqAtualizada);
            System.out.println("FAQ #" + faqAtualizada.getId() + " atualizada.");
        } else {
            System.out.println("FAQ #" + faqAtualizada.getId() + " não encontrada.");
        }
    }

    // Deletar FAQ
    public void deletarFAQ(int id) {
        Optional<FAQ> faq = buscarPorId(id);
        if (faq.isPresent()) {
            faqs.remove(faq.get());
            System.out.println("FAQ #" + id + " removida.");
        } else {
            System.out.println("FAQ #" + id + " não encontrada.");
        }
    }

    // Listar todas FAQs
    public List<FAQ> listarTodas() {
        return new ArrayList<>(faqs);
    }

    // Registrar visualização de uma FAQ
    public void registrarVisualizacao(int id) {
        Optional<FAQ> faq = buscarPorId(id);
        if (faq.isPresent()) {
            faq.get().registrarVisualizacao();
            System.out.println("Visualização registrada para FAQ #" + id);
        } else {
            System.out.println("FAQ #" + id + " não encontrada.");
        }
    }

    // Listar FAQs recentes (criado há menos de 7 dias)
    public List<FAQ> listarRecentes() {
        List<FAQ> recentes = new ArrayList<>();
        for (FAQ f : faqs) {
            if (f.isRecente()) {
                recentes.add(f);
            }
        }
        return recentes;
    }
}
