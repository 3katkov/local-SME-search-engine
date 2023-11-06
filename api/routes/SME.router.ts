// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service.ts";
import SME from "../models/SME.ts";

// Global Config
export const SMERouter = express.Router();

SMERouter.use(express.json());

// GET

SMERouter.get("/", async (_req: Request, res: Response) => {
  try {
    const SMEs = await collections.SME.find({}).toArray();

    res.status(200).send(SME);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

SMERouter.get("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.["id"];

  try {
    const query = { _id: new ObjectId(id) };
    const LSE = await collections.SME.findOne(query);

    if (LSE) {
      res.status(200).send(LSE);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req?.params?.["id"]}`);
  }
});

// POST

SMERouter.post("/", async (req: Request, res: Response) => {
  try {
    const newLSE = req.body;
    const result = await collections.SME.insertOne(newLSE);

    result
      ? res
          .status(201)
          .send(`Successfully created a new game with id ${result.insertedId}`)
      : res.status(500).send("Failed to create a new game.");
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});
// PUT

// DELETE
