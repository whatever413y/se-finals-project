import db from "../config/Database";
import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";
import User from "../models/UserModel";

export const createUser = async(req: Request, res: Response) => {
    const { username, password, fullname }: FormInputs = req.body;
    const sqlInsertUser = `INSERT INTO user (username, password, fullname, role) VALUES 
    ('${username}', '${password}', '${fullname}',  'user');`
    try {
        db.query(sqlInsertUser)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}
 
export const updateUser = async(req: Request, res: Response) => {
    const { fullname, username, password }: FormInputs = req.body;
    const id = req.body.id
    try {
        const sqlUpdate = `UPDATE user SET username='${username}', password='${password}', fullname='${fullname}' 
        WHERE id='${id}';`
        db.query(sqlUpdate)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}
 
export const deleteUser = async(req: Request, res: Response) => {
    const { id }: FormInputs = req.body;
    try {
        const sqlDeleteUser = `DELETE FROM user WHERE id='${id}';`
        db.query(sqlDeleteUser)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}

export const loginUser = async(req: Request, res: Response) => {
    const { username, password }: FormInputs = req.body;
    try {
        const sqlFind = `SELECT id, username, fullname, role FROM user WHERE username='${username}' && password='${password}';`;
        db.query(sqlFind, (error, result) => {
            const input = JSON.stringify(result)
            const u = JSON.parse(input)
            if(input === '[]') {
                return res.json("Sign in Failed")
            }
            const user: User = {
                id: u[0].id,
                username: u[0].username,
                fullname: u[0].fullname,
                role: u[0].role
            }
            return res.json(user)
        })
    } catch (error) {
        throw error;
    }
}