import STATUS_MESSAGES from "../configs/statusMessages.js";
import { createUser, getUserByPhoneOrEmail } from "../services/user.service.js";
import { comparePasswords, hashPassword } from "../utils/becypt.js";
import { createToken } from "../utils/token.js";

export const register = async (req, res) => {
  const { fullname, email, phone, status, password } = req.body;
  if (!fullname || !email || !phone || !status || !password) {
    return res
      .status(STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.code)
      .json({ message: STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.message });
  }

  try {
    // Check if user already exists by phone or email
    const existingUser = await getUserByPhoneOrEmail(phone);
    if (existingUser) {
      return res
        .status(STATUS_MESSAGES.AUTH.ACCOUNT_EXISTS.code)
        .json({ message: STATUS_MESSAGES.AUTH.ACCOUNT_EXISTS.message });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await hashPassword(password);

    const user = await createUser({
      fullname,
      email,
      phone,
      status,
      password: hashedPassword,
    });

    // Generate JWT token for the authenticated user
    const token = createToken({ _id: user._id, email: user.email });

    return res
      .status(STATUS_MESSAGES.AUTH.REGISTER_SUCCESS.code)
      .json({ token, message: STATUS_MESSAGES.AUTH.REGISTER_SUCCESS.message });
  } catch (error) {
    res
      .status(STATUS_MESSAGES.GENERAL.SERVER_ERROR.code)
      .json({ message: STATUS_MESSAGES.GENERAL.SERVER_ERROR.message });
  }
};

export const login = async (req, res) => {

  

  if (!phone || !password) {
    return res
      .status(STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.code)
      .json({ message: STATUS_MESSAGES.GENERAL.FIELDS_REQUIRED.message });
  }

  try {
    const user = await getUserByPhoneOrEmail(phone);

    if (!user || !(await comparePasswords(password, user.password))) {
      return res
        .status(STATUS_MESSAGES.AUTH.LOGIN_FAILED.code)
        .json({ message: STATUS_MESSAGES.AUTH.LOGIN_FAILED.message });
    }

    // Generate JWT token for the authenticated user
    const token = createToken({ _id: user._id, email: user.email });

    return res
      .status(STATUS_MESSAGES.AUTH.LOGIN_SUCCESS.code)
      .json({ token, message: STATUS_MESSAGES.AUTH.LOGIN_SUCCESS.message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
