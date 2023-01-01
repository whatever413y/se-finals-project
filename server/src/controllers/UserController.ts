import { Request, Response } from "express";
import verifyToken from "../jwt/Auth";
import generateAccessToken from "../jwt/Token";
import FormInputs from "../models/FormInputs";
import User from "../models/UserModel";
import { userService } from "../services/UserService";

class UserController {

    public createUser = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            userService.createUser(input)
            return res.json("success")
        } catch (error) {
            throw error;
        }
    }
     
    public updateUser = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            const id: FormInputs = req.body.id;
            userService.updateUser(input, id)
            return res.json("success")
        } catch (error) {
            throw error;
        }
    }
     
    public deleteUser = async (req: Request, res: Response) => {   
        try {
            const id: FormInputs = req.body.id;
            userService.deleteUser(id)
            return res.json("success")
        } catch (error) {
            throw error;
        }
    }
    
    public loginUser = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            const accessToken = generateAccessToken(input)
            verifyToken(accessToken, input, (result: User) => {
                return res.json(result)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const userController = new UserController()