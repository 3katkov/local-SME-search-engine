import { MongoClient } from "mongodb";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
import { connectToDatabase } from "./services/database.service.ts";
import { SMERouter } from "./routes/SME.router.ts";

connectToDatabase()
  .then(() => {
    app.use("/sme", SMERouter);

    app.listen(8080, () => {
      console.log(`Server started at http://localhost:8080`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

// import dotenv from "dotenv";

// dotenv.config();
// const app = express();

// async function startMongoDB() {
//   try {
//     const mongodb = await MongoClient.connect(process.env.MONGO_URL);

//     async function run() {
//       try {
//         const database = mongodb.db("SMEs");
//         const movies = database.collection("LSEdb");
//         // Query for a movie that has the title 'Back to the Future'
//         const query = { CompanyName: "1 ACE SKIPS LIMITED" };
//         const movie = await movies.findOne(query);
//         console.log(movie);
//       } finally {
//         // Ensures that the client will close when you finish/error
//         await mongodb.close();
//       }
//     }
//     run().catch(console.dir);

// await mongodb.connect();

// app.db = mongodb.db();

// app.use(express.json());
// app.use(morgan("dev"));

// // routes
// app.use("/api");

// start server
//     app.listen(3000, () => {
//       console.log(`Server is running on http://localhost:${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// startMongoDB();
