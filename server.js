import express from "express";
import connectToDb from "./configs/database";
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectToDb();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.listen(prompt, () => {
  console.log(`Server is running on port ${PORT}`);
});
