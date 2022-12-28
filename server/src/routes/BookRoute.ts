import express from "express";
import { bookController } from "../controllers/BookController";
 
const router = express.Router();
 
router.post('/book/add', bookController.createBook);
router.post('/book/delete', bookController.deleteBook);
 
export default router;