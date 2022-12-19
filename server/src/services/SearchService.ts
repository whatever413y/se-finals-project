import { findBook, getAll } from "../handlers/SearchHandler";
import FormInputs from "../models/FormInputs";

export const searchBook = (input: FormInputs, callback: Function) => {
    try {
        findBook(input, (result: string) => {
            return callback(result)
        })
    } catch (error) {
        throw error;
    }
}

export const searchGenre = (input: FormInputs, callback: Function) => {
    try {
        getAll(input, (result: string) => {
            return callback(result)
        })
    } catch (error) {
        throw error;
    }
}