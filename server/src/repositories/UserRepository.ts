import db from "../config/Database";
import FormInputs from "../models/FormInputs";

class UserRepository {
    
    public addUser = (input: FormInputs, callback: Function) => {
        const { username, password, fullname }: FormInputs = input;
        const sqlInsertUser = 
        `INSERT INTO user (username, password, fullname, role) 
        VALUES ('${username}', '${password}', '${fullname}',  'user');`
    
        db.query(sqlInsertUser, (error) => {
            if (error) {
                return callback("fail")
            }
            return callback("success")
        })
    }

    public updateUserInfo = (input: FormInputs) => {
        const { fullname, username, password, id }: FormInputs = input;
        const sqlUpdate = 
        `UPDATE user SET username='${username}', password='${password}', fullname='${fullname}' 
        WHERE id='${id}';`
    
        db.query(sqlUpdate)
    }

    public deleteUser = (input: FormInputs, callback: Function) => {
        const { id, username }: FormInputs = input;
        const sqlDeleteUser = `DELETE FROM user WHERE id='${id}' OR username='${username}';`
        
        db.query(sqlDeleteUser, (error, result) => {
            const res = JSON.stringify(result)
            return callback(res)
        })
    }

    public handleUserLogin = (input: FormInputs, callback: Function) => {
        const { username, password }: FormInputs = input;
        const sqlFind = 
        `SELECT id, username, fullname, role FROM user 
        WHERE username='${username}' && password='${password}';`
            
        db.query(sqlFind, (error, result) => {
            const res: string = JSON.stringify(result)
            return callback(res)
        })
    }
}

export const userRepo = new UserRepository()