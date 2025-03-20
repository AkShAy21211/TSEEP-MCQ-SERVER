import STATUS_MESSAGES from "../configs/statusMessages.js";
import { createQuestion, gethQuestions } from "../services/question.service.js";

// Get 10 random questions
export const fetchQuestions = async (req, res) => {
  try {
    const questions = await gethQuestions();
    return res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get 10 random questions
export const addNewQuestion = async (req, res) => {
  const { question, options, correctAnswer } = req.body;
  if (!question || !options || !correctAnswer) {
    return res
      .status(STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.code)
      .json({ message: STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.message });
  }
  if (options.length < 4) {
    return res
      .status(STATUS_MESSAGES.QUESTION.LESS_OPTIONS.code)
      .json({ message: STATUS_MESSAGES.QUESTION.LESS_OPTIONS.message });
  }
  try {
    await createQuestion({
      question,
      options,
      correctAnswer,
    });
    return res.json({
      message: STATUS_MESSAGES.QUESTION.QUESTION_ADDED.message,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
