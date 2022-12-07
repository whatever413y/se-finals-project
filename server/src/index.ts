import express, { Express, Request, Response } from "express";
import path from 'path'
import cors from "cors";
import { RequestHandler } from 'express-serve-static-core';
import db from "./config/Database"

import UserRoute from "./routes/UserRoute";

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

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});