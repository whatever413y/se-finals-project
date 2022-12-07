import db from "../config/Database";
import { Request, Response } from "express";

interface FormInputs {
    ISBN: string,
    bookTitle: string,
    author: string
}

export const createBook = async(req: Request, res: Response) => {
    const { ISBN, bookTitle, author }: FormInputs = req.body;
    const sqlInsert = "INSERT INTO librarydb.book (isbn, bookTitle, author) VALUES (?, ?, ?)"
    try {
        db.query(sqlInsert, [ISBN, bookTitle, author], () => {
            console.log(`Added ${bookTitle} successfully!`)
            alert(`Added ${bookTitle} successfully!`)
        })
    } catch (error) {
        throw error;
    }
}
 
export const updateBook = async(req: Request, res: Response) =>{
    try {

    } catch (error) {
        throw error;
    }
}
 
export const deleteBook = async(req: Request, res: Response) =>{
    try {

    } catch (error) {
        throw error;
    }
}