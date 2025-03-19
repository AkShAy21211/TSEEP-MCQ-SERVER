import express from "express";
import authRoute from "./routes/auth.route.js";
import connectToDb from "./configs/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectToDb();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth",authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
