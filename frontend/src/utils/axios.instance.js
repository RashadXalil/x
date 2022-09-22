const axios = require('axios').default;

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 2000,
});