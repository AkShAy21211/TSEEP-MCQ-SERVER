import UserModel from "../models/user.model";

export const createUser = async (userData) => {
  try {
    const newUser = new UserModel(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserByPhone = async (phone) => {
    try {
        const user = await UserModel.findOne({ phone });
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}