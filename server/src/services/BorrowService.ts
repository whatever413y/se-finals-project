import FormInputs from "../models/FormInputs";
import { borrowRepo } from "../repositories/BorrowRepository";

class BorrowService {

    public borrow = (input: FormInputs, id: FormInputs) => {
        try {
            borrowRepo.borrow(input, id)
        } catch (error) {
            throw error;
        }
    }
}

export const borrowService = new BorrowService()