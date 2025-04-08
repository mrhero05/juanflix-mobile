import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://staging.juanflix.com.ph/api/v1/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const LoginService = {
    login(params = {}) {
        console.log('tes request');
        return apiClient.post('login', params)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    },
};

export default LoginService;
