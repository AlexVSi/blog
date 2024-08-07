interface IUser {
	id: string
	firstname: string
	lastname: string
	email: string
	password: string
	isActivated?: boolean
	activationLink?: string
	roleId: string
}

export default IUser
