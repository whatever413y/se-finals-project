import db from "../config/Database";
import { Request, Response } from "express";

interface FormInputs {
    ISBN: string,
    bookTitle: string,
    author: string,
    genre: string
}

export const createBook = async(req: Request, res: Response) => {
    const { ISBN, bookTitle, author, genre }: FormInputs = req.body;
    const sqlInsert = "INSERT INTO librarydb.book (isbn, bookTitle, author, genre) VALUES (?, ?, ?, ?)"
    try {
        db.query(sqlInsert, [ISBN, bookTitle, author, genre], () => {
            console.log(`Added ${bookTitle} successfully!`)
        })
    } catch (error) {
        throw error;
    }
}

export const deleteBook = async(req: Request, res: Response) =>{
    const { ISBN }: FormInputs = req.body;
    try {
        const sqlDelete = `DELETE FROM user WHERE isbn='${ISBN}';`;
        db.query(sqlDelete, () => {
            console.log(`Deleted a book with ${ISBN}`)
        })
    } catch (error) {
        throw error;
    }
}