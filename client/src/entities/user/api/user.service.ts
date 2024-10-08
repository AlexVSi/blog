import { AxiosResponse } from 'axios'
import $api from '@shared/http'
import { IUserLogin } from '../model/IUser'

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUserLogin>> {
        return $api.get<IUserLogin>('auth/users')
    }
}
