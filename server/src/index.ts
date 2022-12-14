import express, { Express, Request, Response } from "express";
import path from 'path'
import cors from "cors";
import { RequestHandler } from 'express-serve-static-core';
import db from "./config/Database"

import UserRoute from "./routes/UserRoute";
import BookRoute from "./routes/BookRoute";
import InventoryRoute from "./routes/InventoryRoute";
import SearchRoute from "./routes/SearchRoute";
import BorrowRoute from "./routes/BorrowRoute";

const app: Express = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());
app.use(express.urlencoded({extended: true}) as RequestHandler)
app.use(express.json() as RequestHandler);

db.connect((err) => {
  if (err) throw err;
    console.log("LibraryDB Connected!")
})

app.use(UserRoute);
app.use(BookRoute);
app.use(InventoryRoute);
app.use(SearchRoute);
app.use(BorrowRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});