export const listarCampanhas = async () => {
  try {
    const response = await api.get('/campanhas');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar campanhas:', error);
    return [];
  }
};