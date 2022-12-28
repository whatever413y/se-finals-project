import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";
import { bookService } from "../services/BookService";

class BookController {
    createBook = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            bookService.createBook(input)
            return res.json("success")
        } catch (error) {
            throw error;
        }
    }
    
    deleteBook = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            bookService.deleteBook(input)
            return res.json("success")
        } catch (error) {
            throw error;
        }
    }
}

export const bookController = new BookController()