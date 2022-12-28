import express from "express";
import { userController } from "../controllers/UserController";
 
const router = express.Router();

router.post('/user/login', userController.loginUser)
router.post('/user/register', userController.createUser);
router.post('/user/update', userController.updateUser);
router.post('/user/delete', userController.deleteUser);
 
export default router;