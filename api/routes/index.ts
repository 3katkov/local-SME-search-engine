import * as express from "express";
import * as sRouter from "./s/s.ts";

let router = express.Router();

router.use("/s", sRouter);

export default router;
