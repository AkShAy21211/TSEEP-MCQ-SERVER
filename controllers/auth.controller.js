import STATUS_MESSAGES from "../configs/statusMessages";
import { createUser, getUserByPhone } from "../services/user.service";

export const register = async (req, res) => {
  const { name, email, phone, status, password } = req.body;
  if (!name || !email || !phone || !status || !password) {
    return res
      .status(STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.code)
      .json({ message: STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.message });
  }

  try {
    await createUser({ name, email, phone, status, password });
    res
      .status(STATUS_MESSAGES.AUTH.REGISTER_SUCCESS.code)
      .json({ message: STATUS_MESSAGES.AUTH.REGISTER_SUCCESS.message });
  } catch (error) {
    res
      .status(STATUS_MESSAGES.GENERAL.SERVER_ERROR.code)
      .json({ message: STATUS_MESSAGES.GENERAL.SERVER_ERROR.message });
  }
};

export const login = async (req, res) => {
  const { phone, password } = req.body;
  if (!phone || !password) {
    return res
      .status(STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.code)
      .json({ message: STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.message });
  }

  try {
    const user = await getUserByPhone(phone);
    res
      .status(STATUS_MESSAGES.AUTH.LOGIN_SUCCESS.code)
      .json({ message: STATUS_MESSAGES.AUTH.LOGIN_SUCCESS.message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
