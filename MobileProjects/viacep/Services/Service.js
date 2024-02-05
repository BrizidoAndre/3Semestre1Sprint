import axios from "axios";

const viaCepUri = `https://viacep.com.br/ws/`;

const api = axios.create({ 
    baseURL: viaCepUri
})

export default api;