import axios from 'axios';
import { parseCookies } from 'nookies';

export const api = axios.create({
    baseURL: '/api',
});

export const serverApi = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.API_URL : process.env.LOCAL_API_URL,

    // transformRequest: [function (data, headers) {
    //     if (headers['Content-Type'] && headers['Content-Type'].startsWith('multipart/form-data')) {
    //         const form = new FormData();
    //         for (const key in data) {
    //             const value = data[key];
    //             if (Array.isArray(value)) {
    //                 const arrayKey = `${key}[]`;
    //                 value.forEach(v => {
    //                     form.append(arrayKey, v);
    //                 });
    //             } else{
    //                 form.append(key, value);
    //             }
    //         }
    //         return form;
    //     }

    //     return data;
    // }]
});

serverApi.interceptors.request.use(async config => {
    //const { 'star.token' : token } = parseCookies();

    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    config.headers.Accept = "application/json"

    return config;
});