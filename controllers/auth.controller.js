import { createUser, getUserByPhone } from "../services/user.service";

export const register = async (req, res) => {
  try {
    const { name, email, phone, status, password } = req.body;
    const user = await createUser({ name, email, phone, status, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await getUserByPhone(phone);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
