"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const mysql_1 = __importDefault(require("mysql2"));
const app = (0, express_1.default)();
const PORT = 3000;
const db = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'librarydb'
});
db.connect((err) => {
    if (err)
        throw err;
    console.log("LibraryDB Connected!");
});
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// get user details from db
app.get('/db/user', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    console.log(username);
    console.log(password);
    const sqlQuery = "SELECT iduser, name, username FROM librarydb.user WHERE username = ? and password = ?;";
    db.query(sqlQuery, [username, password], (err, result) => {
        if (err)
            throw err;
        console.log(result);
        res.send(result);
    });
});
// insert username and password to db
app.post('/db/insert', (req, res) => {
    const { username, password } = req.body;
    const sqlInsert = "INSERT INTO librarydb.user (username, password) VALUES (?, ?)";
    db.query(sqlInsert, [username, password], (err, result) => {
        if (err)
            throw err;
        console.log('Success!');
    });
});
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
