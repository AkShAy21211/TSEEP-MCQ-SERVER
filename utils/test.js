export function calculateScore(questions,answers) {
  // Calculate score
  let score = 0;
  const processedQuestions = answers
    .map((userAnswer) => {
      const question = questions.find(
        (q) => q._id.toString() === userAnswer.questionId
      );

      if (question) {
        const isCorrect = question.correctAnswer === userAnswer.answer;
        if (isCorrect) score += 5; // 5 marks for each correct answer

        return {
          questionId: question._id,
          answer: userAnswer.answer,
        };
      }
      return null;
    })
    .filter(Boolean);
  return { score, processedQuestions };
}

export const generateRandom6Digit = () => Math.floor(100000 + Math.random() * 900000);

