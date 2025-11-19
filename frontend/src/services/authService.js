import api from './api';

export const login = async (email, senha) => {
  try {
    const response = await api.post('/auth/login', { email, senha });
    return { success: true, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.error || 'Erro ao fazer login' 
    };
  }
};