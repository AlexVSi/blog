import { NextFunction, Request, Response } from 'express'
import authService from '../services/auth.service'
import { log } from 'console'

class AuthController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await authService.registration(req.body)
            res.cookie('refreshToken', user.tokens.refreshToken, { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'none', partitioned: true })
            return res.json(user)
        } catch (e) {
            next(e)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await authService.login(req.body.email, req.body.password)
            res.cookie('refreshToken', user.tokens.refreshToken, { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'none', partitioned: true })
            return res.json(user)
        } catch(e) {
            next(e)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.cookies)
            const { refreshToken } = req.cookies
            const token = await authService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            next(e);
        }
    }

    async activate(req: Request, res: Response, next: NextFunction) {
        try {
            const activationLink: string = req.params.link
            await authService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL!)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies
            const user = await authService.refresh(refreshToken)
            res.cookie('refreshToken', user.tokens.refreshToken, { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'none', partitioned: true })
            return res.json(user)
        } catch (e) {
            next(e)
        }
    }
}

export default new AuthController()
