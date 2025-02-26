import axios from "axios";

const API_URL = "https://neumaticosusadoscba.com.ar/api/"

export const Axios = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})