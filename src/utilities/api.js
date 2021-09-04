import axios from 'axios';

import { API_HOSTNAME } from 'constants/serverConstants';

// Creating axios instance with custom configuration
const api = axios.create({
    baseURL: API_HOSTNAME,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
);

export default api;
