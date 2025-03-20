import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  testId: {
    type: Number,
    required: true,
    unique: true,
  },
  userId: mongoose.Schema.Types.ObjectId,
  questions: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
      answer: String,
    },
  ],
  score: {
    type: Number,
    required: true,
  },
  emoji: {
    type: String,
  },
  comment: {
    type: String,
  },
});

export default mongoose.model("Test", TestSchema);
