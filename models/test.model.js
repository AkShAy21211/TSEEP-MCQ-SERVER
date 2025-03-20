import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  questions: [{ question: String, options: [String], answer: String }],
  score: Number,
  feedback: {
    status: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
});

export default mongoose.model("Test", TestSchema);
