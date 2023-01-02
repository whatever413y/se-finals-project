import db from "../config/Database";
import FormInputs from "../models/FormInputs";

class InventoryRepository {

    private sqlUpdateInventory = (bookTitle: FormInputs): string => {
        const sqlUpdateInventory = 
        `UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
        SET inventory.book_id=book.id 
        WHERE book.bookTitle='${bookTitle}';`
        return sqlUpdateInventory
    }

    private sqlUpdateBook = (bookTitle: FormInputs): string => {
        const sqlUpdateBook = 
        `UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
        SET book.user_id=inventory.id 
        WHERE inventory.bookTitle='${bookTitle}';`
        return sqlUpdateBook
    }

    public addBook = (bookTitle: FormInputs, id: FormInputs) => {
        const sqlAdd = 
        `INSERT INTO inventory (user_id, bookTitle) 
        VALUES ('${id}', '${bookTitle}');`
            db.query(sqlAdd, (error) => {
                if (error) console.log('Already in inventory')
            })
            db.query(this.sqlUpdateInventory(bookTitle))
            db.query(this.sqlUpdateBook(bookTitle))
    }

    private sqlUpdateBookNull = (bookTitle: FormInputs): string => {
        const sqlUpdateBookNull = 
        `UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
        SET book.user_id=NULL 
        WHERE inventory.bookTitle='${bookTitle}';`
        return sqlUpdateBookNull
    }

    public removeBook = (bookTitle: FormInputs) =>{
        const sqlRemove = 
        `DELETE FROM inventory 
        WHERE bookTitle='${bookTitle}';`
        try {
            db.query(this.sqlUpdateBookNull(bookTitle))
            db.query(sqlRemove)
        } catch (error) {
            throw error
        }
    }

    public fetchInventory = (id: FormInputs, callback: Function) => {
        const sqlQuery = 
        `SELECT book.id, book.bookTitle, book.authorName, book.isAvailable FROM book 
        INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
        WHERE inventory.user_id='${id}';`
        try {
            db.query(sqlQuery, (error, result) => {
                const res: string = JSON.stringify(result)
                return callback(res)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const inventoryRepo = new InventoryRepository()