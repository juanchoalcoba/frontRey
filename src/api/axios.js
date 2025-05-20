import axios from "axios";


const instance = axios.create({
    baseURL: `http://backend-rey.vercel.app/api`,
    withCredentials: true
})
export default instance