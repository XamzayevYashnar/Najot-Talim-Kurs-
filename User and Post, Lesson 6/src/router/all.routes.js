import postRouter from "./post.routes.js";
import userRouter from "./user.routes.js";
import { Router } from "express";

const router = new Router();

router
    .use('/posts', postRouter)
    .use('/users', userRouter)

export {
    router
}