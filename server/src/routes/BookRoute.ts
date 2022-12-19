import express from "express";
import { createBookController, deleteBookController } from "../controllers/BookController";
 
const router = express.Router();
 
router.post('/book/add', createBookController);
router.post('/book/delete', deleteBookController);
 
export default router;