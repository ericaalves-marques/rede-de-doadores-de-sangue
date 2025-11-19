// Configuração da URL base da API
// Para desenvolvimento local com backend Java, use a URL do seu servidor local
// Para produção, altere para a URL do servidor de produção

const API_CONFIG = {
  // URL base da API - ALTERE AQUI para apontar para seu backend Java
  baseURL: 'http://localhost:8080/api',
  
  // Timeout para requisições (em milissegundos)
  timeout: 10000,
  
  // Headers padrão
  headers: {
    'Content-Type': 'application/json',
  },
  
  // Enviar cookies de sessão
  withCredentials: true,
};

export default API_CONFIG;
