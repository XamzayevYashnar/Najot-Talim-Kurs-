import { createServer } from "node:http";
import {config} from 'dotenv'
import getData from './helpers/help.js'

config();

const port = parseInt(process.env.PORT || 8080, 10)

const server=createServer(async(req, res)=>{
    res.setHeader("Content-Type", "application/json")

    if (req.url === '/users' && req.method === 'GET'){
        const result = await getData()
        res.writeHead(200)
        res.end(JSON.stringify(result))
    }

    if (req.url.startsWith('users/') && req.method === 'GET'){
        const result = await getData().find(el=>el.id === req.url.split('')[2])
        res.end(result)
    }

}).listen(port, ()=>{
    console.log('Server running on port', port)
})