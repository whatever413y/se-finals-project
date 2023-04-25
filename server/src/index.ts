import express, { Express } from "express";
import serverless from "serverless-http"
import path from "path";
import cors from "cors";
import dotenv from 'dotenv';
import { RequestHandler } from 'express-serve-static-core';
import db from "./config/Database"

import UserRoute from "./routes/UserRoute";
import BookRoute from "./routes/BookRoute";
import SearchRoute from "./routes/SearchRoute"
import InventoryRoute from "./routes/InventoryRoute";
import BorrowRoute from "./routes/BorrowRoute";

dotenv.config()

const app: Express = express();
const PORT: number = 3000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());
app.use(express.urlencoded({extended: true}) as RequestHandler)
app.use(express.json() as RequestHandler);

db.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("LibraryDB Connected!")
  }
})

app.use(UserRoute)
app.use(BookRoute)
app.use(SearchRoute)
app.use(InventoryRoute)
app.use(BorrowRoute)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

export default serverless(app)