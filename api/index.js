import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./routes/job.route.js";
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
import path from "path";

dotenv.config();
const port = 3000;
import authRoutes from "./routes/auth.route.js";
app.use("/api/auth", authRoutes);
app.use("/api/job", jobRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection to database successful");
    //listen to request on PORT
    app.listen(process.env.PORT, () => {
      console.log(
        `listening to requests on port http://localhost:${process.env.PORT} `
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
