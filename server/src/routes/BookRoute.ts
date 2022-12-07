import express from "express";
import { createBook, updateBook, deleteBook} from "../controllers/BookController";
 
const router = express.Router();
 
router.post('/books', createBook);
router.patch('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
 
export default router;