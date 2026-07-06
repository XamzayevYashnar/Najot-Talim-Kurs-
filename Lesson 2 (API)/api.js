import {createServer} from 'node:http'
import { getData, addFile } from './helpers/help.js'

createServer(async(req, res)=>{
    res.setHeader('Content-Type', 'application/json')

    if (req.url === '/users' && req.method === 'GET'){
        const date = await getData()
        res.writeHead(200)
        res.end(JSON.stringify(date), null, 2)
        return
    }

    else if (req.url === '/users/add' && req.method === 'POST'){

        let body = '';
        req.on('data', chunk=>{
            body+=chunk.toString();
        });

        req.on('end', async()=>{
            try{
                const clientData = JSON.parse(body)
                let file = await getData();

                const isExists = file.some(el=>el.id === clientData.id)
                
                if (isExists){
                    res.writeHead(400)
                    res.end(JSON.stringify({
                        message: "Id xatoligi"
                    }))
                }

                res.writeHead(200);

                const result = await addFile(clientData)
                res.end(JSON.stringify(result), null, 2)

            } catch (err){
                console.log(err)
                res.writeHead(404)
                return res.end(JSON.stringify({
                    message: "Noto'g'ri ma'lumot yoki format",
                    err: err
                }))
            }
        })
        return
    }
    else {

        res.writeHead(404);
        return res.end(JSON.stringify({ message: 'error post 404' }), null, 2);

    }

} ).listen(3000, ()=> console.log('server runnning on port 3000'))