// index.js
import express from "express";
import cors from "cors";
import "dotenv/config";
import roadmapRouter from "./routes/roadmap.route.js";
import ApiError from "./utils/ApiError.js";

const app = express();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: process.env.CORS_ALLOWED_ORIGINS || "*",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes Declaration
app.use("/api/v1/roadmap", roadmapRouter);

app.get("/", (req, res) => {
  res.send("EduVerse Backend is running! 🚀");
});
// !! IMPORTANT !!
// Global Error Handling Middleware
// This must be the last middleware added to the app.
app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    // If the error is a known type (ApiError), send a structured response
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
  }

  // For unknown errors
  console.error(err);
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});