import {connect} from 'mongoose'
import { config } from 'dotenv'
import dns from 'node:dns';

dns.setDefaultResultOrder('ipv4first');

config()

export async function connectDB(){
    try {
        await connect(process.env.MONGO_URL)
        console.log('Database connected')
    } catch (error) {
        console.log('Error on db.js Databse!', error)
    }
}
