import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = 'https://www.googleapis.com/books/v1/volumes';
const KEY = 'AIzaSyBOp7ka45YxvfPaKyr6hzGQ2XyepVwuoRw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
    const api = axios.create({
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT,
        params: {
            key: KEY
        }
    });

    api.interceptors.response.use(response => response.data)

    return api;
};