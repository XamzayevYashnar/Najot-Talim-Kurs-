import {readFile, writeFile} from 'node:fs/promises'
import path from 'node:path'

export async function getData(){
    try{
        const data = await readFile(path.join(process.cwd(), 'user.json'), 'utf-8')
        return JSON.parse(data)
    } catch (err){  
        if (err.code === 'ENOENT'){
            return []
        }
        console.log('faylni uqishda xato')
        return []
    }
}

export async function addFile(data){
    try{
        const date = await getData()
        date.push({
            id: data.id,
            name: data.name
        })
        await writeFile(path.join(process.cwd(), 'user.json'), JSON.stringify(date, null, 2))
        return date
    } catch (err){
        console.log(err)
    }
}