import axios from "axios";

const viaCepUri = `https://opencep.com/v1/`;

const api = axios.create({ 
    baseURL: viaCepUri
})

export default api;