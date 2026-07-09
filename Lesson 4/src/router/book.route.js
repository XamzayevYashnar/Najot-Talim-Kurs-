import { Router } from "express";
import bookController from "../controllers/book.controller.js";

const routerBook = new Router();

routerBook
    .get('', bookController.getBooks)
    .get('/:id', bookController.getBook)
    .post('', bookController.postBook)
    .put('/:id', bookController.putBook)
    .delete('/:id', bookController.deleteBook)

export default routerBook