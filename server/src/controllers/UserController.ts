import db from "../config/Database";
import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";

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
    const oldUsername: string = req.body.oldUsername
    try {
        const sqlUpdate = `UPDATE user SET username='${username}', password='${password}', fullname='${fullname}' 
        WHERE username='${oldUsername}';`
        db.query(sqlUpdate)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}
 
export const deleteUser = async(req: Request, res: Response) => {
    const { username }: FormInputs = req.body;
    try {
        const sqlDeleteUser = `DELETE FROM user WHERE username='${username}';`
        db.query(sqlDeleteUser)
        res.json("success")
    } catch (error) {
        throw error;
    }
}

export const loginUser = async(req: Request, res: Response) => {
    const { username, password }: FormInputs = req.body;
    try {
        const sqlFind = `SELECT role FROM user WHERE username='${username}' && password='${password}';`;
        db.query(sqlFind, (error, result) => {
            const input = JSON.stringify(result)
            if(input === '[{"role":"user"}]') {
                return res.json("user");
            } else if(input === '[{"role":"admin"}]') {
                return res.json("admin");
            } else {
                return res.json("fail");
            }
        })
    } catch (error) {
        throw error;
    }
}