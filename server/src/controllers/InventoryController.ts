import db from "../config/Database";
import { Request, Response } from "express";

export const addBook = async(req: Request, res: Response) => {
    const {  } = req.body;
    const sqlInsert = "INSERT INTO librarydb.inventory () VALUES ()"
    try {
        db.query(sqlInsert, [], () => {
            console.log(`Added  successfully!`)
        })
    } catch (error) {
        throw error;
    }
}

export const deleteBook = async(req: Request, res: Response) =>{
    const {  } = req.body;
    try {
        const sqlDelete = `DELETE FROM inventory WHERE isbn='';`;
        db.query(sqlDelete, () => {
            console.log(`Deleted a book with `)
        })
    } catch (error) {
        throw error;
    }
}