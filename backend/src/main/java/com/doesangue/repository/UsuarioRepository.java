package com.doesangue.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.doesangue.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
    boolean existsByEmail(String email);
}