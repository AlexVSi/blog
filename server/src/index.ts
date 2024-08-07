import 'dotenv/config'
import 'module-alias/register'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './routes/index'
import { errorHandler } from 'middleware/error.middleware'


const PORT = process.env.PORT || 6000;

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
app.use(errorHandler)

const startApp = async (): Promise<void> => {
	try {
		await app.listen(PORT, () => console.log('Server start on port', PORT))
	} catch (e) {
		console.log(e)
	}
}

startApp()
