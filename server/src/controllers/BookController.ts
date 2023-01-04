import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";
import { bookService } from "../services/BookService";

class BookController {
    createBook = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            bookService.createBook(input, (result: string) => {
            return res.json(result)
        })
        } catch (error) {
            throw error;
        }
    }
    
    deleteBook = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            bookService.deleteBook(input, (result: string) => {
                return res.json(result)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const bookController = new BookController()