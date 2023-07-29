import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import routes from "./routes/index.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", routes);

export { PORT, app };
