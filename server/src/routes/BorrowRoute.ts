import express from "express";
import { borrow } from "../controllers/BorrowController";
 
const router = express.Router();
 
router.post('/borrow', borrow);
 
export default router;