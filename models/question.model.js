import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String, 
});

export default mongoose.model("Question", QuestionSchema);
