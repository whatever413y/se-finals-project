import FormInputs from "../models/FormInputs";
import { borrowRepo } from "../repositories/BorrowRepository";

class BorrowService {

    public borrow = (input: FormInputs) => {
        const days = 9
        const date = new Date()
        const borrowDate = new Date().toISOString().substring(0, 10)
        const returnDate = new Date(date.getFullYear(), date.getMonth(), date.getDay() + days)
        .toISOString().substring(0, 10)
        try {
            borrowRepo.borrow(input, borrowDate, returnDate)
        } catch (error) {
            throw error;
        }
    }
}

export const borrowService = new BorrowService()