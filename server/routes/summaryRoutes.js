import express from "express";
import { authenticateToken } from "../middleware/userAuth.js";
import {
  summarizeTextController,
  getSummariesController,
} from "../controllers/summariseController.js";

const summariseRouter = express.Router();

summariseRouter.post(
  "/summarise-text",

  summarizeTextController
);
summariseRouter.get(
  "/get-summaries",
  authenticateToken,
  getSummariesController
);

export default summariseRouter;
