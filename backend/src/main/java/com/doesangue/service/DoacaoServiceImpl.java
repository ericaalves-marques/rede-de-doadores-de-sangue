package com.doesangue.service;

import com.doesangue.model.Doacao;
import com.doesangue.repository.DoacaoRepository;
import com.doesangue.service.DoacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoacaoServiceImpl implements DoacaoService {

    @Autowired
    private DoacaoRepository doacaoRepository;

    @Override
    public List<Doacao> listarTodas() {
        return doacaoRepository.findAll();
    }

    @Override
    public Doacao buscarPorId(Long id) {
        return doacaoRepository.findById(id).orElse(null);
    }

    @Override
    public Doacao criar(Doacao doacao) {
        return doacaoRepository.save(doacao);
    }

    @Override
    public Doacao atualizar(Long id, Doacao doacao) {
        Optional<Doacao> existente = doacaoRepository.findById(id);

        if (!existente.isPresent()) {
            return null;
        }

        Doacao d = existente.get();
        d.setData(doacao.getData());
        d.setHorario(doacao.getHorario());
        d.setLocal(doacao.getLocal());
        d.setUsuarioId(doacao.getUsuarioId());

        return doacaoRepository.save(d);
    }

    @Override
    public boolean deletar(Long id) {
        Optional<Doacao> existente = doacaoRepository.findById(id);

        if (!existente.isPresent()) {
            return false;
        }

        doacaoRepository.deleteById(id);
        return true;
    }
}
