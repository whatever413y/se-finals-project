import express from "express";
import { borrowController } from "../controllers/BorrowController";
 
const router = express.Router();
 
router.post('/borrow', borrowController.borrow);
 
export default router;