import FormInputs from "../models/FormInputs";
import { bookRepo } from "../repositories/BookRepository";

class BookService {

    public createBook = (input: FormInputs, callback: Function) => {
        try {
            bookRepo.addBook(input, (result: string) => {
                return callback(result)
            })
        } catch (error) {
            throw error;
        }
    }

    public deleteBook = (input: FormInputs, callback: Function) => {
        try {
            bookRepo.deleteBook(input, (result: string) => {
                return callback(result)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const bookService = new BookService()