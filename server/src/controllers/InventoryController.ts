import db from "../config/Database";
import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";

export const addBook = async(req: Request, res: Response) => {
    const { bookTitle, username }: FormInputs = req.body;
    const sqlInsert = `INSERT INTO inventory (username, bookTitle) 
    VALUES ('${username}', '${bookTitle}');`
    try {
        db.query(sqlInsert)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}

export const removeBook = async(req: Request, res: Response) =>{
    const { bookTitle, username }: FormInputs = req.body;
    const sqlDelete = `DELETE FROM inventory WHERE username='${username}' AND bookTitle='${bookTitle}';`
    try {
        db.query(sqlDelete)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}

export const fetchInventory = async(req: Request, res: Response) => {
    const { username }: FormInputs = req.body;
    const sqlQuery = `SELECT bookTitle from inventory WHERE username='${username}'`
    try {
        db.query(sqlQuery, (error, result) => {
            return res.json(result)
        })
    } catch (error) {
        throw error;
    }
}