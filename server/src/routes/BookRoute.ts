import express from "express";
import { createBook, deleteBook } from "../controllers/BookController";
 
const router = express.Router();
 
router.post('/book/add', createBook);
router.post('/book/delete', deleteBook);
 
export default router;