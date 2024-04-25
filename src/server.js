import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {retries: 3});
axios.defaults.withCredentials = true;
const BASE_URL = 'http://localhost:8080/';
const API_URL = 'http://192.168.88.93:7070';

export default {
    getToken(username, password) {
        const promise = axios({
            method: 'post',
            url: `${API_URL}/restservices/json/jbo/login/doLogin`,
            withCredentials: true,
            data: {
                username: username,
                password: password,
            }
        });
        return promise;
    },
};
