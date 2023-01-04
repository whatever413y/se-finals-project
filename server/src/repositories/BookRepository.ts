import db from "../config/Database";
import FormInputs from "../models/FormInputs";

class BookRepository {

    public addBook = (input: FormInputs, callback: Function) => {
        const { bookTitle, authorName, genre }: FormInputs = input;
        const sqlInsertBook = 
        `INSERT INTO librarydb.book (bookTitle, authorName, genre, isAvailable) 
        VALUES ('${bookTitle}', '${authorName}', '${genre}', TRUE);`
        
        db.query(sqlInsertBook, (error) => {
            if (error) return callback("error")
        })
    
    }

    public deleteBook = (input: FormInputs, callback: Function) => {
        const { bookTitle }: FormInputs = input;
        const sqlDeleteBook = `DELETE FROM book WHERE bookTitle='${bookTitle}';`
    
        db.query(sqlDeleteBook, (error) => {
            if(error) return callback("error")
        });
    }
}

export const bookRepo = new BookRepository()