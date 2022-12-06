import db from "../config/Database";
import { Request, Response } from "express";

interface FormInputs {
    username: string,
    password: string
}

export const createUser = async(req: Request, res: Response) => {
    const { username, password }: FormInputs = req.body;
    const sqlInsert = "INSERT INTO librarydb.user (username, password) VALUES (?, ?)"
    try {
        db.query(sqlInsert, [username, password], (err, result) => {
        console.log('Success!')
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