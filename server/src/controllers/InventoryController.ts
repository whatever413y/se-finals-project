import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";
import { inventoryService } from "../services/InventoryService";

class InventoryController {

    public addBook = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body.book;
            const id: FormInputs = req.body.id
            inventoryService.addBook(input, id)
            return res.json("success")
        } catch (error) {
            throw error;
        }
    }

    public removeBook = async (req: Request, res: Response) => {
        try {
            const input: FormInputs = req.body.book;
            inventoryService.removeBook(input)
            return res.json("success")
        } catch (error) {
            throw error;
        }
    }

    public fetchInventory = async (req: Request, res: Response) => {
        try {
            const id: FormInputs = req.body.id
            inventoryService.fetchInventory(id, (result: string) => {
                const results: [] = JSON.parse(result)
                return res.json(results)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const inventoryController = new InventoryController()