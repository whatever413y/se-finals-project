import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";
import { inventoryService } from "../services/InventoryService";

class InventoryController {

    public addBook = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            inventoryService.addBook(input, (result: string) => {
                return res.json(result)
            })
        } catch (error) {
            throw error;
        }
    }

    public removeBook = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body;
            inventoryService.removeBook(input, (result: string) => {
                return res.json(result)
            })
        } catch (error) {
            throw error;
        }
    }

    public fetchInventory = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body
            inventoryService.fetchInventory(input, (result: string) => {
                const results: [] = JSON.parse(result)
                return res.json(results)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const inventoryController = new InventoryController()