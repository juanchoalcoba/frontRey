import axios from "axios";


const instance = axios.create({
    baseURL: `https://backend-rey.vercel.app/`,
    withCredentials: true
})
export default instance