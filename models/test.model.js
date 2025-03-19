import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  questions: [{ question: String, options: [String], answer: String }],
  score: Number,
  feedback: String,
});

export default mongoose.model("Test", TestSchema);
