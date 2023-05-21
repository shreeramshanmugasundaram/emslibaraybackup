import bcrypt from "bcrypt";
import userList from "../models/userSchema.js";

const userCreate = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all the required inputs " });
    }
    const existingUser = await userList.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already Exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userList.create({
      username,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account Created Successfully",
    });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default userCreate;
