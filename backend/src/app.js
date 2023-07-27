import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

export { PORT, app };
