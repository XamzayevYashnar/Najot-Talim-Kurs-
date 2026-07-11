import { config } from "dotenv";

config(); 

const obj = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
}

export default obj