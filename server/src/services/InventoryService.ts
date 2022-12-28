import FormInputs from "../models/FormInputs";
import { inventoryRepo } from "../repositories/InventoryRepository";

class InventoryService {

    public addBook = (bookTitle: FormInputs, id: FormInputs) => {
        try {
            inventoryRepo.addBook(bookTitle, id)
        } catch (error) {
            throw error;
        }
    }

    public removeBook = (bookTitle: FormInputs) => {
        try {
            inventoryRepo.removeBook(bookTitle)
        } catch (error) {
            throw error;
        }
    }

    public fetchInventory = (id: FormInputs, callback: Function) => {
        try {
            inventoryRepo.fetchInventory(id, (result: string) => {
                return callback(result)
            })
        } catch (error) {
            throw error;
        }
    }
}

export const inventoryService = new InventoryService()