import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://6845495afc51878754dafada.mockapi.io/",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default apiClient;