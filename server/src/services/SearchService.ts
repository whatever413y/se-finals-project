import FormInputs from "../models/FormInputs";
import { searchRepo } from "../repositories/SearchRepository";

class SearchService {

    public searchBook = (input: FormInputs, callback: Function) => {
        try {
            searchRepo.findBook(input, (result: string) => {
                return callback(result)
            })
        } catch (error) {
            throw error;
        }
    }
    
    public searchGenre = (input: FormInputs, callback: Function) => {
        try {
            searchRepo.getAll(input, (result: string) => {
                return callback(result)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const searchService = new SearchService()