import db from "../config/Database";
import FormInputs from "../models/FormInputs";

class SearchRepository {

    public findBook = (input: FormInputs, callback: Function) => {
        const { search }: FormInputs = input
        const sqlSelect = 
        `SELECT id, bookTitle, authorName, isAvailable FROM book 
        WHERE bookTitle like '%${search}%' OR authorName like '%${search}%';`
        try {
            db.query(sqlSelect, (error, result) => {
                const res: string = JSON.stringify(result)
                return callback(res)
            })
        } catch (error) {
            throw error;
        }
    }
    
    public getAll = (input: FormInputs, callback: Function) => {
        const { search }: FormInputs = input
        const sqlSelect = 
        `SELECT id, bookTitle, authorName, isAvailable from book 
        WHERE genre='${search}';`
        try {
            db.query(sqlSelect, (error, result) => {
                const res: string = JSON.stringify(result)
                return callback(res)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const searchRepo = new SearchRepository()