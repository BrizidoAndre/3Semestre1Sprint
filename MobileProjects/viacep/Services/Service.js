import axios from "axios";

const cep = 0;

const viaCepUri = `https://viacep.com.br/ws/${cep}/json/`;

const api = axios.create({ 
    baseURL: viaCepUri
})

export default api;