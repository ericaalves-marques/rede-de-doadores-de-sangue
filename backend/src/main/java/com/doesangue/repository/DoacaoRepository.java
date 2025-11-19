package com.doesangue.repository;

import  com.doesangue.model.Doacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoacaoRepository extends JpaRepository<Doacao, Long> {
}
