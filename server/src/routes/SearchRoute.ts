import express from "express";
import { searchController } from "../controllers/SearchController";
 
const router = express.Router();
 
router.post('/search/book', searchController.searchBook);
router.post('/search/genre', searchController.searchGenre);
 
export default router;