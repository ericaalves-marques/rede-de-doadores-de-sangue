export const cadastrar = async (usuario) => {
  try {
    const response = await api.post('/usuarios', {
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      tipo_sanguineo: usuario.tipoSanguineo,
      telefone: usuario.telefone
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.error || 'Erro ao cadastrar' 
    };
  }
};