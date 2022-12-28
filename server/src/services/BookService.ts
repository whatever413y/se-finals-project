import FormInputs from "../models/FormInputs";
import { bookRepo } from "../repositories/BookRepository";

class BookService {

    public createBook = (input: FormInputs) => {
        try {
            bookRepo.addBook(input)
        } catch (error) {
            throw error;
        }
    }

    public deleteBook = (input: FormInputs) => {
        try {
            bookRepo.deleteBook(input)
        } catch (error) {
            throw error;
        }
    }
}

export const bookService = new BookService()