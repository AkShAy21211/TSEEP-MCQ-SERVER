import STATUS_MESSAGES from "../configs/statusMessages.js";
import { getQuestionByIds } from "../services/question.service.js";
import {
  getLatestTestResult,
  saveTest,
  updateTestResult,
} from "../services/test.service.js";
import { calculateScore, generateRandom6Digit } from "../utils/test.js";

export const submitTest = async (req, res) => {
  const { answers } = req.body;
  const userId = req?.user?._id;

  if (!userId || !answers || !Array.isArray(answers)) {
    return res
      .status(STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.code)
      .json({ message: STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.message });
  }

  try {
    // Fetch all correct answers from DB
    const questionIds = answers.map((ans) => ans.questionId);

    const questions = await getQuestionByIds(questionIds);

    // Validate answers and calculate score
    const { score, processedQuestions } = calculateScore(questions, answers);

    // Generate a unique test ID and save test to DB
    const testId = generateRandom6Digit();

    await saveTest({
      userId,
      testId,
      questions: processedQuestions,
      score,
      emoji: "",
      comment: "",
    });

    return res.status(STATUS_MESSAGES.TEST.TEST_SUBMITTED.code).json({
      message: STATUS_MESSAGES.TEST.TEST_SUBMITTED.message,
      score,
      testId,
    });
  } catch (error) {
    console.error(error);
    res
      .status(STATUS_MESSAGES.GENERAL.SERVER_ERROR.code)
      .json({ message: STATUS_MESSAGES.GENERAL.SERVER_ERROR.message });
  }
};

export const getTestResult = async (req, res) => {
  try {
    const userId = req?.user?._id;
    const latestTest = await getLatestTestResult(userId);

    if (!latestTest) {
      return res
        .status(STATUS_MESSAGES.GENERAL.NOT_FOUND.code)
        .json({ message: STATUS_MESSAGES.GENERAL.NOT_FOUND.message });
    }

    res.json(latestTest);
  } catch (error) {
    console.error(error);
    res
      .status(STATUS_MESSAGES.GENERAL.SERVER_ERROR.code)
      .json({ message: STATUS_MESSAGES.GENERAL.SERVER_ERROR.message });
  }
};

export const saveFeedBack = async (req, res) => {
  try {
    const testId = req.params.testId;
    const { emoji, comment } = req.body;

    console.log({
      testId,
      emoji,
      comment,
    });
    

    if (!emoji || !comment) {
      return res
        .status(STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.code)
        .json({ message: STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.message });
    }

    const feedBackData = {
      emoji,
      comment,
    };
    
    await updateTestResult(testId,feedBackData);
    return res.status(STATUS_MESSAGES.FEEDBACK.FEEDBACK_SUBMITTED.code).json({
      message: STATUS_MESSAGES.FEEDBACK.FEEDBACK_SUBMITTED.message,
    });
  } catch (error) {
    console.error(error);
    res
      .status(STATUS_MESSAGES.GENERAL.SERVER_ERROR.code)
      .json({ message: STATUS_MESSAGES.GENERAL.SERVER_ERROR.message });
  }
};
