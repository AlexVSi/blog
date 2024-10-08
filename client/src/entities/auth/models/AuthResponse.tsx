import { IUserLogin, IUserReg } from "@entities/user/model/IUser";

export interface AuthResponse {
    tokens: {
        accessToken: string;
        refreshToken: string;
    }
    user: IUserLogin;
}
