import express from "express";
import { createUser, updateUser, deleteUser} from "../controllers/UserController";
 
const router = express.Router();
 
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
 
export default router;