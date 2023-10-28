import express from "express";
import { getIndex, postIndex } from "./index.js";

const router = express.Router();

router.route("/").get(getIndex).post(postIndex);
