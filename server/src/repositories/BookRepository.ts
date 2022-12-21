import db from "../config/Database";
import FormInputs from "../models/FormInputs";

export const addBook = (input: FormInputs) => {
    const { bookTitle, author, genre }: FormInputs = input;
    const sqlInsertBook = 
    `INSERT INTO librarydb.book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('${bookTitle}', '${author}', '${genre}', TRUE);`
    
    db.query(sqlInsertBook)
}

export const removeBook = (input: FormInputs) => {
    const { bookTitle }: FormInputs = input;
    const sqlDeleteBook = `DELETE FROM book WHERE bookTitle='${bookTitle}';`

    db.query(sqlDeleteBook)
}