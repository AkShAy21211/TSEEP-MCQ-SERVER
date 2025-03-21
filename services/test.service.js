import TestModel from "../models/test.model.js";

export const saveTest = async (testData) => {
  try {
    let test = new TestModel(testData);
    test = await test.save();
    return test;
  } catch (error) {
    throw new Error("Error saving test");
  }
};

export const getLatestTestResult = async (userId) => {
  try {
    const latestTest = await TestModel.findOne(
      { userId },
      {
        questions: 0,
        emoji: 0,
        userId: 0,
        comment: 0,
        __v: 0,
      }
    )
      .sort({ createdAt: -1 })
      .exec();

    return latestTest;
  } catch (error) {
    console.error("Error fetching latest test result:", error);
    throw error;
  }
};
export const updateTestResult = async (testId, data) => {
  try {
    await TestModel.findByIdAndUpdate(
      testId, 
      { $set: data },
      { new: true, runValidators: true }
    );

    return true;
  } catch (error) {
    console.error("Error updating test results:", error);
    throw error;
  }
};
