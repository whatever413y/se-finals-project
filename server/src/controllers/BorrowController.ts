import db from "../config/Database";
import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";

export const borrow = async (req: Request, res: Response) => {
    const { id, borrowDate, returnDate }: FormInputs = req.body;
    const sqlUpdate = 
    `UPDATE book INNER JOIN inventory ON book.user_id=inventory.user_id 
    SET isAvailable=FALSE 
    WHERE inventory.user_id=${id};`
    const sqlInsert = 
    `INSERT INTO borrow (user_id, borrowDate, returnDate) 
    VALUES (${id}, ${borrowDate}, ${returnDate});`
    try {
        db.query(sqlUpdate)
        db.query(sqlInsert)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}