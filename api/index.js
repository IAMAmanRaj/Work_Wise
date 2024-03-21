import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
app.use(express.json())
dotenv.config();
const port = 3000;
import authRoutes from "./routes/auth.route.js";
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
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
