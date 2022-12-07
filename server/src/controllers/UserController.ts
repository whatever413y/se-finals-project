import db from "../config/Database";
import { Request, Response } from "express";

interface FormInputs {
    name: string | null,
    username: string,
    password: string
}

export const createUser = async(req: Request, res: Response) => {
    const { name, username, password }: FormInputs = req.body;
    const sqlInsert = "INSERT INTO librarydb.user (name, username, password) VALUES (?, ?, ?)"
    try {
        db.query(sqlInsert, [name, username, password], () => {
            console.log('Successfully registered!')
        })
    } catch (error) {
        throw error;
    }
}
 
export const updateUser = async(req: Request, res: Response) =>{
    try {

    } catch (error) {
        throw error;
    }
}
 
export const deleteUser = async(req: Request, res: Response) =>{
    try {

    } catch (error) {
        throw error;
    }
}