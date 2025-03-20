import QuestionModel from "../models/question.model.js";

export const gethQuestions = async () => {
  try {
    const questions = await QuestionModel.aggregate([
      { $sample: { size: 10 } },
    ]);
    return questions;
  } catch (error) {
    throw new Error("Failed to fetch questions");
  }
};

export const createQuestion = async (question) => {
  try {
    const questions = new QuestionModel(question);
    const savedQuestion = await questions.save();
    return savedQuestion;
  } catch (error) {
    throw new Error("Failed to fetch questions");
  }
};
