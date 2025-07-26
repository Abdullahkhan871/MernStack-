import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth.routes.js";
import { db } from "./config/db.js";
import cookieParser from "cookie-parser";
import { cloudinaryConfig } from "./config/cloudinary.js"
dotenv.config();
db();
cloudinaryConfig();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("Working");
});

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});