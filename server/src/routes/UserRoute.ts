import express from "express";
import { createUserController, deleteUserController, 
    loginUserController, updateUserController } from "../controllers/UserController";
 
const router = express.Router();

router.post('/user/login', loginUserController)
router.post('/user/register', createUserController);
router.post('/user/update', updateUserController);
router.post('/user/delete', deleteUserController);
 
export default router;