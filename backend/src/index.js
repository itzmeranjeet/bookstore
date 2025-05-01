import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRouter from "../routes/book.route.js";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();

const port = process.env.PORT || 4001;
const URI = process.env.MONGODB_URI;

//Connect to DB

try {
  mongoose.connect(URI);
  console.log("Connected to db");
} catch (error) {
  console.log("Error", error);
}

//Defining routes
app.use("/book", bookRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
