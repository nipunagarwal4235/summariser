import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import summariseRouter from "./routes/summaryRoutes.js";

const app = express();
const port = process.env.PORT || 5000;
connectDB();

const allowedOrigins = [
  "http://localhost:5173", // React  app
];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// API Endpoints
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/summarise", summariseRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
