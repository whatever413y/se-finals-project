import FormInputs from "../models/FormInputs";
import User from "../models/UserModel";
import { addUser, updateUserInfo, deleteUserInfo, userLoginHandler } from "../handlers/UserHandler";

export const createUser = (input: FormInputs) => {
    try {
        addUser(input)
    } catch (error) {
        throw error;
    }
}
 
export const updateUser = (input: FormInputs, id: FormInputs) => {
    try {
        updateUserInfo(input, id)
    } catch (error) {
        throw error;
    }
}
 
export const deleteUser = (id: FormInputs) => {
    try {
        deleteUserInfo(id)
    } catch (error) {
        throw error;
    }
}

export const loginUser = (input: FormInputs, callback: Function) => {
    try {
        userLoginHandler(input, (result: string) => {
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