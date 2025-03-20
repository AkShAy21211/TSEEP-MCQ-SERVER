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
    await questions.save();
    return true;
  } catch (error) {
    throw new Error("Failed to fetch questions");
  }
};

export const getQuestionByIds = async (questionIds) => {
  try {
    const questions = await QuestionModel.find({
      _id: { $in: questionIds },
    });
    return questions;
  } catch (error) {
    throw new Error("Failed to fetch questions");
  }
};
