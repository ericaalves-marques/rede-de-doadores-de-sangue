import axios from 'axios';
import API_CONFIG from '@/config/api';

// Cria uma instância do axios com configurações padrão
const api = axios.create(API_CONFIG);

// Interceptor para adicionar token de autenticação (se necessário)
api.interceptors.request.use(
  (config) => {
     
     const token = localStorage.getItem('token');
     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirecionar para login se não autenticado
      console.error('Não autenticado');
    }
    return Promise.reject(error);
  }
);

export default api;
