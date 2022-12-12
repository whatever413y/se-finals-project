import express from "express";
import { addBook, fetchInventory, removeBook } from "../controllers/InventoryController";
 
const router = express.Router();
 
router.post('/inventory/add', addBook);
router.post('/inventory/delete', removeBook);
router.post('/inventory/fetch', fetchInventory);

export default router;