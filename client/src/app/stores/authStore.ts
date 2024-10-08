import { IUserLogin, IUserReg } from "@entities/user/model/IUser";
import AuthService from "@entities/auth/api/auth.service";
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { AuthResponse } from "@entities/auth/models/AuthResponse";

export default class AuthStore {
    user = {} as IUserLogin
    isAuth: boolean = false
    isLoading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setUser(user: IUserLogin) {
        this.user = user
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.tokens.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            return true
        } catch (e: any) {
            console.log(e.response?.data?.message);
            return
        }
    }

    async registration(userData: IUserReg) {
        try {
            const response = await AuthService.registration(userData)
            localStorage.setItem('token', response.data.tokens.accessToken)
            this.setAuth(true)
            const user = response.data.user
            this.setUser({ id: user.id, email: user.email, roles: user.roles })
            return true
        } catch (e: any) {
            console.log(e.response?.data?.message);
            return
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUserLogin)
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            this.setLoading(true)
            const response = await axios.get<AuthResponse>('http://127.0.0.1:8888/api/auth/refresh', { withCredentials: true })
            localStorage.setItem('token', response.data.tokens.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {

        } finally {
            this.setLoading(false)
        }
    }
}
