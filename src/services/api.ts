import axios from "axios";
// import { store } from "src/redux/store";

// Default config options
const defaultOptions = {
    baseURL: `https://acad-ecommerce.noot.ae`,
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjYxOTc3LCJpYXQiOjE2ODgxMjU5NzcsImp0aSI6IjJhNTgzYzBlMmE5YjQ2ODM4NTBkODgyY2M3ZTE2ZGE0IiwidXNlcl9pZCI6MSwic2NoZW1hX25hbWUiOiJzY2hlbWFfcmJocWVrd2tweXluZXJuZmlrYnl0bmdpIn0.RnKzZHszMi9XbphRn86FKNxYGOssWl-XcKC0Bw4E7yE' },
};

// Create instance
const api = axios.create(defaultOptions);

export default api;

