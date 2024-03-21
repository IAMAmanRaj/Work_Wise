import express from "express";
const app = express();
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
