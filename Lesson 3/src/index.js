import express from 'express'
import {config} from 'dotenv'
import { connectDB } from './config/db.js'

config()

const app = express()
const port = Number(process.env.PORT) || 3001;

app.use(express.json())

await connectDB()

app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'Hello my boy'
    })
})

app.listen(port, ()=>{
    console.log('Server ishlamoqda...', port)
})