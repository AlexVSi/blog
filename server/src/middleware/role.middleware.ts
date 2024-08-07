import { secretKey } from "config/config"
import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

const role = (roles: any) => {
	return function(req: Request, res: Response, next: NextFunction) {
		if (req.method == "OPTIONS") {
			next()
		}
		try {
			const token = req.headers.authorization?.split(' ')[1]
			if (!token) {
				return res.status(403).json({message: "Пользователь не авторизован"})
			}
			const {roles: userRoles} = jwt.verify(token, secretKey.secret)
			let hasRole = false
			userRoles.array.forEach(element => {
				
			});
			next()
		} catch(e) {
			console.log(e)
			return res.status(403).json({message: "Пользователь не авторизован"})
		}
	}
}