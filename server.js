import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import connectToDb from "./configs/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectToDb();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Routes
app.use("/api/auth",authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
