import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";
import { searchBook, searchGenre } from "../services/SearchService";

export const searchBookController = async (req: Request, res: Response) => {
    try {
        const input: FormInputs = req.body;
        searchBook(input, (result: string) => {
            const results = JSON.parse(result)
            return res.json(results)
        })
    } catch (error) {
        throw error;
    }
}

export const searchGenreController = async (req: Request, res: Response) => {
    try {
        const input: FormInputs = req.body;
        searchGenre(input, (result: string) => {
            const results = JSON.parse(result)
            return res.json(results)
        })
    } catch (error) {
        throw error;
    }
}