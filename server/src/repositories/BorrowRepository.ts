import db from "../config/Database";
import FormInputs from "../models/FormInputs";

class BorrowRepository {

    private sqlUpdate = (id: number): string => {
        const sqlUpdate = 
        `UPDATE book INNER JOIN inventory ON book.user_id=inventory.user_id 
        SET isAvailable=FALSE 
        WHERE inventory.user_id=${id};`
        return sqlUpdate
    }

    public borrow = (input: FormInputs, borrowDate: string, returnDate: string) => {
        const { id }: FormInputs = input
        const sqlInsert = 
        `INSERT INTO borrow (user_id, borrowDate, returnDate) 
        VALUES (${id}, '${borrowDate}', '${returnDate}');`
        try {
            db.query(this.sqlUpdate(id))
            db.query(sqlInsert, (error) => {
                console.log(error)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const borrowRepo = new BorrowRepository()