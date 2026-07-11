import express from 'express'
import env from './utils/env.js'
import {router} from './router/all.routes.js'
import { globalErrorHandler } from './middleware/globalErrorHandler.js'
import connectDB from './db/conncetDB.js'

const app = express()

await connectDB()

app.use(express.json())
app.use('/api', router)
app.use(globalErrorHandler)

app.listen(env.PORT, ()=>console.log('Server is working!'))