import db from "../config/Database";
import FormInputs from "../models/FormInputs";

export const findBook = (input: FormInputs, callback: Function) => {
    const { search }: FormInputs = input
    const sqlSelect = 
    `SELECT bookTitle FROM book 
    WHERE bookTitle='${search}' OR authorName='${search}';`
    try {
        db.query(sqlSelect, (error, result) => {
            const res: string = JSON.stringify(result)
            return callback(res)
        })
    } catch (error) {
        throw error;
    }
}

export const getAll = (input: FormInputs, callback: Function) => {
    const { genre }: FormInputs = input
    const sqlSelect = 
    `SELECT bookTitle from book 
    WHERE genre='${genre}';`
    try {
        db.query(sqlSelect, (error, result) => {
            const res: string = JSON.stringify(result)
            return callback(res)
        })
    } catch (error) {
        throw error;
    }
}