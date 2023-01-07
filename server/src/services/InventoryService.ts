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

    public removeBook = (input: FormInputs, callback: Function) => {
        try {
            inventoryRepo.checkAvailability(input, (result: string) => {
                if(result === "[]") {
                    inventoryRepo.removeBook(input, (result: string) => {
                        const res: {affectedRows: number} = JSON.parse(result)
                        if (res.affectedRows === 0) {
                            return callback("fail")
                        }
                        return callback("success")
                    })
                } else {
                    return callback("fail")
                }
            })
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