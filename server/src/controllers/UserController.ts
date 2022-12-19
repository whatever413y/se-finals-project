import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";
import User from "../models/UserModel";
import { createUser, deleteUser, loginUser, updateUser } from "../services/UserService";

export const createUserController = async (req: Request, res: Response) => {
    try {
        const input: FormInputs = req.body;
        createUser(input)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}
 
export const updateUserController = async (req: Request, res: Response) => {
    try {
        const input: FormInputs = req.body;
        const id: FormInputs = req.body.id;
        updateUser(input, id)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}
 
export const deleteUserController = async (req: Request, res: Response) => {   
    try {
        const id: FormInputs = req.body.id;
        deleteUser(id)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}

export const loginUserController = async (req: Request, res: Response) => {
    try {
        const input: FormInputs = req.body;
        loginUser(input, (result: User) => {
            return res.json(result)
        })
    } catch (error) {
        throw error;
    }
}