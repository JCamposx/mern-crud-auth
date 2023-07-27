import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_CONNECTION = process.env.DB_CONNECTION;

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);
    console.log(">>> Successfully connected to DB");
  } catch (error) {
    console.log(error);
  }
};
