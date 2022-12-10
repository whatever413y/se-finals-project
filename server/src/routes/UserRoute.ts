import express from "express";
import { createUser, updateUser, deleteUser, loginUser} from "../controllers/UserController";
 
const router = express.Router();

router.post('/user/login', loginUser)
router.post('/user/create', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
 
export default router;