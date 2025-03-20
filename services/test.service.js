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
