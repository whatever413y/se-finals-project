import FormInputs from "../models/FormInputs";
import { addBook, removeBook } from "../handlers/BookHandler";

export const createBook = (input: FormInputs) => {
    try {
        addBook(input)
    } catch (error) {
        throw error;
    }
}

export const deleteBook = (input: FormInputs) => {
    try {
        removeBook(input)
    } catch (error) {
        throw error;
    }
}