import userService from "services/user.service";

class UserController {
    async getAllUsers() {
        try {
            const users = await userService.getAllUsers()
            return users
        } catch (e) {
            console.log(e);
        }

    }}

export default new UserController()
