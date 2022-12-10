import db from "../config/Database";
import { Request, Response } from "express";

interface FormInputs {
    name: string | null,
    username: string,
    password: string
}

export const createUser = async(req: Request, res: Response) => {
    const { name, username, password }: FormInputs = req.body;
    const sqlInsert = "INSERT INTO user (name, username, password, role) VALUES (?, ?, ?, 'user');"
    try {
        db.query(sqlInsert, [name, username, password], () => {
            console.log('Successfully registered!')
        })
    } catch (error) {
        throw error;
    }
}
 
export const updateUser = async(req: Request, res: Response) => {
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

export const loginUser = async(req: Request, res: Response) => {
    const { username, password }: FormInputs = req.body;
    try {
        const sqlFind = `SELECT username, password FROM user WHERE username='${username}' && password='${password}';`;
        db.query(sqlFind, (error, result) => {
            const input = JSON.stringify(result)
            if(input === '[]') {
                return res.json("fail");
            }
            return res.json("success");
        })
    } catch (error) {
        throw error;
    }
}