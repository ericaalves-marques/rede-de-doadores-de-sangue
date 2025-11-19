package com.doesangue.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponse {
    private String token;
    private String email;
    private String nome;
    private String tipoSanguineo;
    private String cidade;
    private String estado;
}