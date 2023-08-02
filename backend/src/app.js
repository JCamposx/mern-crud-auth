import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";

import { FRONTEND_URL, PORT } from "./config.js";
import authRoutes from "./routes/auth.routes.js";
import routes from "./routes/index.routes.js";

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", routes);

export { PORT, app };
