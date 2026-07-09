import { Router } from "express";
import controller from '../controllers/author.controller.js'

const router = new Router()

router
    .get('', controller.getAuthors)
    .post('', controller.postAuthor)
    .get('/:id', controller.getAuthor)
    .put('/:id', controller.updateAuthor)

export default router