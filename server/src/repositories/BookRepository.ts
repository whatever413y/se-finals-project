import db from "../config/Database";
import FormInputs from "../models/FormInputs";

class BookRepository {

    public addBook = (input: FormInputs, callback: Function) => {
        const { bookTitle, authorName, genre }: FormInputs = input;
        const sqlInsertBook = 
        `INSERT INTO librarydb.book (bookTitle, authorName, genre, isAvailable) 
        VALUES ('${bookTitle}', '${authorName}', '${genre}', TRUE);`
        
        db.query(sqlInsertBook, (error) => {
            if (error) {
                return callback("fail")
            }
            return callback("success")
        })
    
    }

    public deleteBook = (input: FormInputs, callback: Function) => {
        const { bookTitle }: FormInputs = input;
        const sqlDeleteBook = `DELETE FROM book WHERE bookTitle='${bookTitle}';`
    
        db.query(sqlDeleteBook, (error, result) => {
            const res = JSON.stringify(result)
            return callback(res)
        });
    }
}

export const bookRepo = new BookRepository()