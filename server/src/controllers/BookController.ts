import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";
import { createBook, deleteBook } from "../services/BookService";


export const createBookController = async (req: Request, res: Response) => {
    try {
        const input: FormInputs = req.body;
        createBook(input)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}

export const deleteBookController = async (req: Request, res: Response) =>{
    try {
        const input: FormInputs = req.body;
        deleteBook(input)
        return res.json("success")
    } catch (error) {
        throw error;
    }
}