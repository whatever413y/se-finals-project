import FormInputs from "../models/FormInputs";
import { inventoryRepo } from "../repositories/InventoryRepository";

class InventoryService {

    public addBook = (input: FormInputs, callback: Function) => {
        try {
            inventoryRepo.addBook(input, (result: string) => {
                return callback(result)
            })
        } catch (error) {
            throw error;
        }
    }

    public removeBook = (input: FormInputs) => {
        try {
            inventoryRepo.removeBook(input)
        } catch (error) {
            throw error;
        }
    }

    public fetchInventory = (input: FormInputs, callback: Function) => {
        try {
            inventoryRepo.fetchInventory(input, (result: string) => {
                return callback(result)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const inventoryService = new InventoryService()