import db from "../config/Database";
import FormInputs from "../models/FormInputs";

class BookRepository {

    public addBook = (input: FormInputs) => {
        const { bookTitle, author, genre }: FormInputs = input;
        const sqlInsertBook = 
        `INSERT INTO librarydb.book (bookTitle, authorName, genre, isAvailable) 
        VALUES ('${bookTitle}', '${author}', '${genre}', TRUE);`
        
        db.query(sqlInsertBook)
    }

    public deleteBook = (input: FormInputs) => {
        const { bookTitle }: FormInputs = input;
        const sqlDeleteBook = `DELETE FROM book WHERE bookTitle='${bookTitle}';`
    
        db.query(sqlDeleteBook)
    }
}

export const bookRepo = new BookRepository()