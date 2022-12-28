import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";
import { searchService } from "../services/SearchService";

class SearchController {

    public searchBook = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            searchService.searchBook(input, (result: string) => {
                const results = JSON.parse(result)
                return res.json(results)
            })
        } catch (error) {
            throw error;
        }
    }
    
    public searchGenre = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            searchService.searchGenre(input, (result: string) => {
                const results = JSON.parse(result)
                return res.json(results)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const searchController = new SearchController()