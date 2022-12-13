import db from "../config/Database";
import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";

export const searchBook = async(req: Request, res: Response) => {
    const { search}: FormInputs = req.body;
    const sqlSelect = `SELECT bookTitle FROM book WHERE bookTitle='${search}' OR authorName='${search}';`
    try {
        db.query(sqlSelect, (error, result) => {
            return res.json(result)
        })
    } catch (error) {
        throw error;
    }
}

export const searchGenre = async(req: Request, res: Response) => {
    const { genre }: FormInputs = req.body;
    const sqlSelect = `SELECT bookTitle from book WHERE genre='${genre}';`
    try {
        db.query(sqlSelect, (error, result) => {
            return res.json(result)
        })
    } catch (error) {
        throw error;
    }
}