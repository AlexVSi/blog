import { IPayload } from "interfaces"

export class UserDto {
    id: string
    email: string
    roles: string[]
    isActivated: boolean
    firstname: string

    constructor(model: IPayload) {
        this.id = model.id
        this.email = model.email
        this.roles = model.roles
        this.isActivated = model.isActivated
        this.firstname = model.firstname
    }
}
