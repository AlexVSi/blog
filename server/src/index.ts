import dotenv from "dotenv";
dotenv.config();

import express from 'express'
import cors from 'cors'
import sequelize from './db.js'
import router from './routes/index.js'

const PORT = process.env.PORT || 6000;

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const startApp = async (): Promise<void> => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		await app.listen(PORT, () => console.log('Server start on port', PORT))
	} catch(e) {
		console.log(e)
	}
}

startApp()
