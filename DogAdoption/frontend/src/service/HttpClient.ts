import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:9741',
});

export default http;
