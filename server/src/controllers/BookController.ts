import db from "../config/Database";
import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";

export const createBook = async(req: Request, res: Response) => {
    const { bookTitle, author, genre }: FormInputs = req.body;
    const sqlInsertBook = `INSERT INTO librarydb.book (bookTitle, authorName, genre, isAvailable) VALUES 
    ('${bookTitle}', '${author}', '${genre}', TRUE);`
    try {
        db.query(sqlInsertBook)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}

export const deleteBook = async(req: Request, res: Response) =>{
    const { bookTitle }: FormInputs = req.body;
    try {
        const sqlDeleteBook = `DELETE FROM book WHERE bookTitle='${bookTitle}';`
        db.query(sqlDeleteBook)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}