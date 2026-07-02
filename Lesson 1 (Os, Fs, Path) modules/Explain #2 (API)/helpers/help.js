import { readFile } from "node:fs/promises";
import path from 'path'

const fileName = path.join(process.cwd(), 'Lesson 1 (Os, Fs, Path) modules/Explain #2 (API)/data/main.json')
console.log(fileName)

export default async function getData(){
    const result = await readFile(fileName, 'utf-8')
    return JSON.parse(result)
}