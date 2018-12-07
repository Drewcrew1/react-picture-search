import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID 0164f4337dfd60ea94588c0ac8cfc50f64b89f426173c57a5a24b043d8516bcb'

    }
});