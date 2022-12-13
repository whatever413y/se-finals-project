import express from "express";
import { searchBook, searchGenre } from "../controllers/SearchController";
 
const router = express.Router();
 
router.post('/search', searchBook);
router.post('/search/genre', searchGenre);
 
export default router;