import FormInputs from "../models/FormInputs";
import User from "../models/UserModel";
import { userRepo } from "../repositories/UserRepository";

class UserService {

    public createUser = (input: FormInputs, callback: Function) => {
        try {
            userRepo.addUser(input, (result: string) => {
                return callback(result)
            })
        } catch (error) {
            throw error;
        }
    }

    public updateUser = (input: FormInputs) => {
        try {
            userRepo.updateUserInfo(input)
        } catch (error) {
            throw error;
        }
    }

    public deleteUser = (input: FormInputs, callback: Function) => {
        try {
            const { username } = input
            if (username === 'admin' || username === 'testusername') {
                return callback("fail")
            }
            userRepo.deleteUser(input, (result: string) => {
                const res: {affectedRows: number} = JSON.parse(result)
                if (res.affectedRows === 0) {
                    return callback("fail")
                }
                return callback("success")
            })
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