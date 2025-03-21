import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import questionRoute from "./routes/question.route.js";
import testRoute from "./routes/test.route.js";

import connectToDb from "./configs/database.js";
import ENVS from "./configs/envConfig.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectToDb();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors({
  origin: [ENVS.DEPLOY_URL,ENVS.LOCAL_URL],
}));

// Routes
app.use("/api/auth",authRoute);
app.use("/api/question",questionRoute);
app.use("/api/test",testRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
