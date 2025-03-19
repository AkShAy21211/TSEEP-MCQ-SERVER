import UserModel from "../models/user.model.js";

export const createUser = async (userData) => {
  try {
    const newUser = new UserModel(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserByPhoneOrEmail = async (phone, email) => {
  try {
    const user = await UserModel.findOne({
      $or: [{ phone }, { email }],
    });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
