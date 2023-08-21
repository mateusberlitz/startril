import axios from 'axios';
import { parseCookies } from 'nookies';

export const blog = axios.create({
    baseURL: process.env.BLOG_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.BLOG_TOKEN}`,
    },

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