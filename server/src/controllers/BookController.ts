import db from "../config/Database";
import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";

export const createBook = async(req: Request, res: Response) => {
    const { bookTitle, author, genre }: FormInputs = req.body;
    const sqlInsertBook = `INSERT INTO librarydb.book (bookTitle, authorName, category, availability) VALUES 
    (${bookTitle}, ${author}, ${genre}, 'Yes');`
    const sqlInsertAuthor = `INSERT INTO librarydb.author (authorName) VALUES (${author});`
    try {
        db.query(sqlInsertBook)
        db.query(sqlInsertAuthor)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}

export const deleteBook = async(req: Request, res: Response) =>{
    const { bookTitle }: FormInputs = req.body;
    try {
        const sqlDelete = `DELETE FROM book WHERE bookTitle='${bookTitle}';`;
        db.query(sqlDelete)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}