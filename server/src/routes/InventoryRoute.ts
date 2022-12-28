import express from "express";
import { inventoryController } from "../controllers/InventoryController";
 
const router = express.Router();
 
router.post('/inventory/add', inventoryController.addBook);
router.post('/inventory/delete', inventoryController.removeBook);
router.post('/inventory/fetch', inventoryController.fetchInventory);

export default router;