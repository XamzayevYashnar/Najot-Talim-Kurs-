import express from 'express'
import { env } from './config/index.js'
import { connectDB } from './config/db.js'
import router from './router/author.route.js'
import routerBook from './router/book.route.js'

await connectDB()

const app = express()

app.use(express.json())
app.use('/authors', router)
app.use('/books', routerBook)

app.listen(env.PORT, ()=>console.log('Server is working!', env.PORT))