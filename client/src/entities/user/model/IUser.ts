export interface IUserLogin {
    id: string
    email: string
    roles: string[]
    isActivated: boolean
    firstname: string
}

export interface IUserReg {
    firstname: string
    lastname: string
    email: string
    password: string
}
