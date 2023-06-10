import axios  from "axios";
import './route';
const authToken = '';
const api = axios.create({
    baseURL:BASE_URL,
    headers:{
        Authorization:`Bearer ${authToken}`,
        "Content-Type":'application/json'
    }
})