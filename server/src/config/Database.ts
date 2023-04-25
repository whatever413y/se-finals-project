import mysql from "mysql2";

const db = mysql.createConnection({
    host: 'sql12.freemysqlhosting.net',
    user:'sql12614303',
    password: 'sU9ueGDhx1',
    database: 'sql12614303',
    port: 3306
});

export default db;