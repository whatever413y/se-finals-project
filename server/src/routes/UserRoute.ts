import express from "express";
import { createUser, updateUser, deleteUser, loginUser} from "../controllers/UserController";
 
const router = express.Router();

router.post('/user/login', loginUser)
router.post('/user/register', createUser);
router.post('/user/update', updateUser);
router.post('/user/delete', deleteUser);
 
export default router;