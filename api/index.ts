import { MongoClient } from "mongodb";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import sRoute from "./routes/s/s.ts";

import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 80;

async function start() {
  try {
    const app = express();
    const mongodb = await MongoClient.connect(process.env.MONGO_URL);

    await mongodb.connect();

    app.db = mongodb.db();

    app.use(express.json());
    app.use(morgan("dev"));

    // routes
    app.use("/api", sRoute);

    // start server
    app.listen(3000, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
