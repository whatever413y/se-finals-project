import db from "../config/Database";
import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";

export const createAddBookController = async (req: Request, res: Response) => {
    const { bookTitle }: FormInputs = req.body;
    const id: FormInputs = req.body.id
    const sqlInsert = 
    `INSERT INTO inventory (user_id, bookTitle) 
    VALUES ('${id}', '${bookTitle}');`
    const sqlUpdateInventory = 
    `UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id 
    WHERE book.bookTitle='${bookTitle}';`
    const sqlUpdateBook = 
    `UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.id 
    WHERE inventory.bookTitle='${bookTitle}';`
    try {
        db.query(sqlInsert)
        db.query(sqlUpdateInventory)
        db.query(sqlUpdateBook)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}

export const removeBook = async (req: Request, res: Response) =>{
    const { bookTitle }: FormInputs = req.body;
    const sqlUpdate = 
    `UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL 
    WHERE inventory.bookTitle='${bookTitle}';`
    const sqlDelete = 
    `DELETE FROM inventory 
    WHERE bookTitle='${bookTitle}';`
    try {
        db.query(sqlUpdate)
        db.query(sqlDelete)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}
/*
export const fetchInventory = async(req: Request, res: Response) => {
    const { id }: FormInputs = req.body;
    const sqlQuery = 
    `SELECT bookTitle from inventory WHERE user_id='${id}'`
    try {
        db.query(sqlQuery, (error, result) => {
            return res.json(result)
        })
    } catch (error) {
        throw error;
    }
}*/