package com.doesangue.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.doesangue.dto.AuthResponse;
import com.doesangue.dto.LoginRequest;
import com.doesangue.model.Usuario;
import com.doesangue.repository.UsuarioRepository;
import com.doesangue.security.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(Usuario usuario) {

        // Verifica se o email já está cadastrado
        if (usuarioRepository.existsByEmail(usuario.getEmail())) {
            throw new RuntimeException("Email já cadastrado");
        }

        // Codifica a senha antes de salvar
        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
        usuarioRepository.save(usuario);

        // Geração do token JWT
        String token = jwtService.generateToken(usuario.getEmail());

        return AuthResponse.builder()
                .token(token)
                .email(usuario.getEmail())
                .nome(usuario.getNome())
                .tipoSanguineo(usuario.getTipoSanguineo())
                .cidade(usuario.getCidade())
                .estado(usuario.getEstado())
                .build();
    }

    public AuthResponse login(LoginRequest request) {

        // Autenticação
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getSenha()
                )
        );

        // Busca o usuário no repositório
        Usuario usuario = usuarioRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        // Geração do token JWT
        String token = jwtService.generateToken(usuario.getEmail());

        return AuthResponse.builder()
                .token(token)
                .email(usuario.getEmail())
                .nome(usuario.getNome())
                .tipoSanguineo(usuario.getTipoSanguineo())
                .cidade(usuario.getCidade())
                .estado(usuario.getEstado())
                .build();
    }
}
