import express from "express";
import { searchBookController, searchGenreController } from "../controllers/SearchController";
 
const router = express.Router();
 
router.post('/search/book', searchBookController);
router.post('/search/genre', searchGenreController);
 
export default router;