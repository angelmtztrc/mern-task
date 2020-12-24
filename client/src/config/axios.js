import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'x-auth-token': localStorage.getItem('x-auth-token') || null
  }
});

export default AxiosInstance;
