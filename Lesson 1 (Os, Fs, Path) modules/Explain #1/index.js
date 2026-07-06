import os from 'os'

const res=os.uptime()
console.log('Ishlagan soat: ', res/60/60)

const res=os.totalmem()
console.log('Xotira', res/(1024*1024*1024))

const res=os.cpus()
console.log('CPU tezlik', res)

const res=os.totalmem()
console.log(res/60)

import fs from 'fs'

const res=fs.writeFile('main.js', "console.log('Yashnar')", (err)=>console.log(err))

fs.readFile('main.js', 'utf-8', (err, data)=>{
    if (err) console.log(err);
    if (data) console.log(data)
})

fs.appendFile('main.js', "const ism='Yashnarbek';", err=>console.log(err))

fs.unlink('main.js', err=>console.log(err))