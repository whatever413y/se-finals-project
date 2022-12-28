import { Request, Response } from "express";
import FormInputs from "../models/FormInputs";
import { borrowService } from "../services/BorrowService";

class BorrowController {

    public borrow = async (req: Request, res: Response) => {
        const input: FormInputs = req.body;
        const id: FormInputs = req.body.id;
        try {
            borrowService.borrow(input, id)
        } catch (error) {
            throw error;
        }
    }
}

export const borrowController = new BorrowController()