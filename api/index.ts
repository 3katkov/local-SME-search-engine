import { MongoClient } from "mongodb";
import express from "express";
import bodyParser from "body-parser";
import apiRoute from "./routes/api.ts";

async function start() {
  try {
    const app = express();
    const mongodb = await MongoClient.connect("");

    await mongodb.connect();

    app.db = mongodb.db();

    // body parser
    app.use(
      bodyParser.json({
        limit: "500kb",
      })
    );

    // routes
    app.use("/api", apiRoute);

    // start server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

start();
