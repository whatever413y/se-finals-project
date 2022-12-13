import express from "express";
import { createBook, deleteBook, updateAvailability} from "../controllers/BookController";
 
const router = express.Router();
 
router.post('/book/add', createBook);
router.post('/book/delete', deleteBook);
router.post('/book/update', updateAvailability);
 
export default router;