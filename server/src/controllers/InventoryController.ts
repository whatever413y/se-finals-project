import db from "../config/Database";
import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";

export const addBook = async(req: Request, res: Response) => {
    const { bookTitle }: FormInputs = req.body;
    const sqlAdd = `UPDATE book INNER JOIN inventory ON book.inventory_id = inventory.inventory_id 
    SET book.inventory_id = inventory.inventory_id WHERE book.bookTitle='${bookTitle}';`
    try {
        db.query(sqlAdd)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}

export const removeBook = async(req: Request, res: Response) =>{
    const { bookTitle, username }: FormInputs = req.body;
    const sqlRemove = `UPDATE book INNER JOIN inventory ON book.inventory_id = inventory.inventory_id
    INNER JOIN user ON inventory.inventory_id = user.inventory_id
    SET book.inventory_id = user.inventory_id WHERE book.bookTitle='${bookTitle}' AND user.username='${username}';`
    try {
        db.query(sqlRemove)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}

export const fetchInventory = async(req: Request, res: Response) => {
    const { bookTitle }: FormInputs = req.body;
    const sqlQuery = ``
    try {

    } catch (error) {
        throw error;
    }
}