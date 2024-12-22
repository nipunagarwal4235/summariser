import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import {
  summarizeTextController,
  getSummariesController,
} from "../controllers/summariseController.js";

const summariseRouter = express.Router();

summariseRouter.post("/summarise-text", userAuth, summarizeTextController);
summariseRouter.get("/get-summaries", userAuth, getSummariesController);

export default summariseRouter;
