require("dotenv").config();
const express = require("express");
const app = express();
import { db } from "./src/config/db";
import { router as api } from "./src/routes/index";

app.get("/", (req: any, res: any) => {
  res.send("hello!!");
});

app.use("/api", api);

db.once("open", () => console.log("db connected"));

app.listen(5005, () => {
  console.log(`Example app listening at http://localhost:5005`);
});
