import db from "../config/Database";
import { Request, Response } from "express";

interface FormInputs {
    fullname: string,
    username: string,
    password: string
}

export const createUser = async(req: Request, res: Response) => {
    const { fullname, username, password }: FormInputs = req.body;
    const sqlInsert = "INSERT INTO user (name, username, password, role) VALUES (?, ?, ?, 'user');"
    try {
        console.log(sqlInsert)
        db.query(sqlInsert, [fullname, username, password], () => {
            console.log('Successfully registered!')
        })
    } catch (error) {
        throw error;
    }
}
 
export const updateUser = async(req: Request, res: Response) => {
    const { fullname, username, password }: FormInputs = req.body;
    const oldUsername = req.body.oldUsername
    try {
        const sqlUpdate = `UPDATE user SET name='${fullname}', username='${username}', password='${password}' WHERE username='${oldUsername}';`;
        db.query(sqlUpdate, () => {
            console.log(`Update completed!`)
        })
    } catch (error) {
        throw error;
    }
}
 
export const deleteUser = async(req: Request, res: Response) => {
    const { username }: FormInputs = req.body;
    try {
        const sqlDelete = `DELETE FROM user WHERE username='${username}';`;
        db.query(sqlDelete, () => {
            console.log(`Deleted a User ${username}`)
        })
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