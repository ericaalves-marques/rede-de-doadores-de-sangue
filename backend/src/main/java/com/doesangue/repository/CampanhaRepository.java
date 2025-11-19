package com.doesangue.repository;

import com.doesangue.model.Campanha;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface CampanhaRepository extends JpaRepository<Campanha, Long> {

    // -------------------------------
    // ADICIONAR CAMPANHA — já existe no JpaRepository (save)
    // -------------------------------
    @Transactional
    default Campanha adicionarCampanha(Campanha campanha) {
        return save(campanha);
    }

    // -------------------------------
    // ATUALIZAR CAMPANHA — também é save
    // -------------------------------
    @Transactional
    default Campanha atualizarCampanha(Campanha campanha) {
        return save(campanha);
    }

    // -------------------------------
    // DELETAR CAMPANHA
    // -------------------------------
    @Transactional
    default void deletarCampanha(Long id) {
        deleteById(id);
    }

    // -------------------------------
    // LISTAR TODAS
    // -------------------------------
    default List<Campanha> listarTodas() {
        return findAll();
    }

    // -------------------------------
    // LISTAR POR STATUS
    // -------------------------------
    List<Campanha> findByAtiva(boolean ativa);

    default List<Campanha> listarPorStatus(boolean status) {
        return findByAtiva(status);
    }

    // -------------------------------
    // ATIVAR CAMPANHA
    // -------------------------------
    @Modifying
    @Transactional
    @Query("UPDATE Campanha c SET c.ativa = true WHERE c.id = :id")
    void ativarCampanha(Long id);

    // -------------------------------
    // DESATIVAR CAMPANHA
    // -------------------------------
    @Modifying
    @Transactional
    @Query("UPDATE Campanha c SET c.ativa = false WHERE c.id = :id")
    void desativarCampanha(Long id);
}
