import { connect } from "mongoose";
import { env } from "./index.js";

export async function connectDB(){
    try {
        await connect(env.MONGO_URL)
        return console.log('Databse is connected!')
    } catch (error) {
        return console.log('Error on connect DB', error.message)
    }
}