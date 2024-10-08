import { AuthResponse } from "@entities/auth/models/response/auth.response";
import axios from "axios";
import { error } from "console";

// export const API_URL = import.meta.env.API_URL
export const API_URL = `http://127.0.0.1:8888/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, (async (error) => {
    const originalReq = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalReq._isRetry = true
        try {
            const response = await axios.get<AuthResponse>('http://127.0.0.1:8888/api/auth/refresh', { withCredentials: true })
            localStorage.setItem('token', response.data.tokens.accessToken)
            return $api.request(originalReq)
        } catch (e) {
            console.log(e);
        }
    }
}))

export default $api
