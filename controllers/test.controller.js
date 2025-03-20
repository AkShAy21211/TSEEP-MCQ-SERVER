import STATUS_MESSAGES from "../configs/statusMessages.js";
import { getQuestionByIds } from "../services/question.service.js";
import { saveTest } from "../services/test.service.js";
import { calculateScore, generateRandom6Digit } from "../utils/test.js";

export const submitTest = async (req, res) => {
  const { answers } = req.body;
  const userId = req?.user?._id;

  if (!userId || !answers || !Array.isArray(answers)) {
    return res
      .status(STATUS_MESSAGES.TEST.INVALID.code)
      .json({ message: STATUS_MESSAGES.TEST.INVALID.message });
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
