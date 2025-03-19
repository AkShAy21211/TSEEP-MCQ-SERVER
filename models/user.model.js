import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  status: { type: String, enum: ["Student", "Employee"] },
  password: String,
});

export default mongoose.model("User", UserSchema);
