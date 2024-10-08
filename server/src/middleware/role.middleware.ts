import { secretKey } from "config/config"
import { Request, Response, NextFunction } from "express"
import { IPayload } from "interfaces"
import jwt from 'jsonwebtoken'

export const role = (rolesArray: Array<string>) => {
	return function (req: Request, res: Response, next: NextFunction) {
		if (req.method == "OPTIONS") {
			next()
		}
		try {
			const token = req.headers.authorization!.split(' ')[1]
			if (!token) {
				return res.status(403).json({ message: "Пользователь не авторизован" })
			}
			const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET!)
			const userRoles = (<IPayload>userData).roles

			let hasRole = false;
			rolesArray.forEach(role => {
				if (userRoles.includes(role)) {
					hasRole = true
				}
			});

			if (!hasRole) {
				return res.status(403).json({ message: "Нет доступа" })
			}

			next()
		} catch (e) {
			return res.status(403).json({ message: "Пользователь не авторизован" })
		}
	}
}