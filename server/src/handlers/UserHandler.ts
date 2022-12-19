import db from "../config/Database";
import FormInputs from "../models/FormInputs";

export const addUser = (input: FormInputs) => {
    const { username, password, fullname }: FormInputs = input;
    const sqlInsertUser = 
    `INSERT INTO user (username, password, fullname, role) 
    VALUES ('${username}', '${password}', '${fullname}',  'user');`

    db.query(sqlInsertUser)
}
 
export const updateUserInfo = (input: FormInputs, id: FormInputs) => {
    const { fullname, username, password }: FormInputs = input;
    const sqlUpdate = 
    `UPDATE user SET username='${username}', password='${password}', fullname='${fullname}' 
    WHERE id='${id}';`

    db.query(sqlUpdate)
}
 
export const deleteUserInfo = (id: FormInputs) => {
    const sqlDeleteUser = `DELETE FROM user WHERE id='${id}';`
    
    db.query(sqlDeleteUser)
}

export const userLoginHandler = (input: FormInputs, callback: Function) => {
    const { username, password }: FormInputs = input;
    const sqlFind = 
    `SELECT id, username, fullname, role FROM user 
    WHERE username='${username}' && password='${password}';`
        
    db.query(sqlFind, (error, result) => {
        const res: string = JSON.stringify(result)
        return callback(res)
    })
}