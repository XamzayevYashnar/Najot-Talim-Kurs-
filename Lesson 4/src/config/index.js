import {config} from 'dotenv'

config()

export const env = {
    PORT: Number(process.env.API_PORT),
    MONGO_URL: String(process.env.MONGO_URL)
}