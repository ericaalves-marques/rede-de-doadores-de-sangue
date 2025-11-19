package com.doesangue.service;

import com.doesangue.model.Doacao;

import java.util.List;

public interface DoacaoService {

    List<Doacao> listarTodas();

    Doacao buscarPorId(Long id);

    Doacao criar(Doacao doacao);

    Doacao atualizar(Long id, Doacao doacao);

    boolean deletar(Long id);
}
