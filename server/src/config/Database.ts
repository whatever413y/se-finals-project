import mysql from "mysql2";

const db = mysql.createConnection({
    user:'root',
    password: 'root',
    database: 'librarydb'
});

export default db;