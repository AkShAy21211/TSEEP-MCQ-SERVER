import mongoose from "mongoose";
import ENVS from "./envConfig.js";

// Connect to MongoDB

async function connectToDb() {
  try {
    await mongoose.connect(ENVS.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
}

export default connectToDb;
