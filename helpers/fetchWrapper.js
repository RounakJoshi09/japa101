import axios  from "axios";
import './route';
import Cookies from "js-cookie";
import { url } from "./route";
const authToken = Cookies.get('authToken');
const api = axios.create({
    baseURL:url.BASE_URL,
    headers:{
        Authorization:`Bearer ${authToken}`,
        "Content-Type":'application/json'
    }
})

export default api;