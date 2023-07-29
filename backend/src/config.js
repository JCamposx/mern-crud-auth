import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 8000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/db";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";
