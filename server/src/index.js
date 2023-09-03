import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

//version of api
const app = express();

//middle_ware
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://coding_boy_03:Mernpassword@recipes.vbk7hcp.mongodb.net/?retryWrites=true&w=majority"
);
//server testing  /*usage of the nodemon*/
app.listen(3002, () => console.log("SEVER started Ready to go"));
