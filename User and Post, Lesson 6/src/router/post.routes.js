import { Router } from "express";
import PostController from "../controllers/post.controller.js";
import { validator } from "../middleware/validator.js";
import { PostValidate } from "../validation/post.validation.js";

const router = new Router();

router
    .get('', validator(PostValidate.postObj), PostController.findAll)
    .get('/:id', PostController.findOne)
    .post('', PostController.create)
    .put('', validator(PostValidate.patchObj), PostController.update)

export default router