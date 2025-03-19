import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(prompt, () => {
  console.log(`Server is running on port ${PORT}`);
});
