import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { validator } from "../middleware/validator.js";
import { UserValidate } from "../validation/user.validation.js";

const router = new Router();

router
    .get('', userController.findAll)
    .get('/:id', userController.findOne)
    .post('', validator(UserValidate.postUser), userController.create)
    .put('', validator(UserValidate.patchUser), userController.update)

export default router