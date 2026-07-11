import { connect } from "mongoose";
import env from '../utils/env.js'
import { asyncCatch } from "../middleware/asyncCatch.js";

const connectDB = asyncCatch(async ()=>{
    await connect(env.MONGO_URL)
    console.log('Database is connect!')
})

export default connectDB