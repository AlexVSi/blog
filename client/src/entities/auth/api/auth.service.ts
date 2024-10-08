import { AuthResponse } from '../models/AuthResponse'
import $api from '@shared/http'
import { AxiosResponse } from 'axios'
import { IUserReg } from '@entities/user/model/IUser'

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('auth/login', { email, password })
    }

    static async registration(userData: IUserReg): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('auth/registration', userData)
    }

    static async logout(): Promise<void> {
        return $api.post('auth/logout')
    }
}
