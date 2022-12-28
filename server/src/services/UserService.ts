import FormInputs from "../models/FormInputs";
import User from "../models/UserModel";
import { userRepo } from "../repositories/UserRepository";

class UserService {

    public createUser = (input: FormInputs) => {
        try {
            userRepo.addUser(input)
        } catch (error) {
            throw error;
        }
    }

    public updateUser = (input: FormInputs, id: FormInputs) => {
        try {
            userRepo.updateUserInfo(input, id)
        } catch (error) {
            throw error;
        }
    }

    public deleteUser = (id: FormInputs) => {
        try {
            userRepo.deleteUser(id)
        } catch (error) {
            throw error;
        }
    }

    public loginUser = (input: FormInputs, callback: Function) => {
        try {
            userRepo.handleUserLogin(input, (result: string) => {
                if(result != '[]') {
                    const u = JSON.parse(result)
                    const user: User = {
                        id: u[0].id,
                        username: u[0].username,
                        fullname: u[0].fullname,
                        role: u[0].role
                    }
                    return callback(user)
                } 
                return callback('fail')
            })   
        } catch (error) {
            throw error;
        }
    }
}

export const userService = new UserService()