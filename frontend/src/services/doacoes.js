export const agendarDoacao = async (doacao) => {
  try {
    const response = await api.post('/doacoes', {
      usuario_id: doacao.usuarioId,
      data: doacao.data,
      horario: doacao.horario,
      local: doacao.local,
      status: 'Agendada'
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.error || 'Erro ao agendar doação' 
    };
  }
};