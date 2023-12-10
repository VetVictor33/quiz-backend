import 'dotenv/config'
import express from 'express'
import routes from './routes'
import cors from 'cors'
import { errorHandler } from './http/middlewares/error-handler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler)

export default app