import { IPayload } from "interfaces"

export class UserDto {
	id: string
	email: string
	isActivated: boolean

	constructor(model: IPayload) {
		this.id = model.id
		this.email = model.email
		this.isActivated = model.isActivated
	}
}
