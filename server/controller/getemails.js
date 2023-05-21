import emailSchema from "../models/emailSchema.js";

export const getemails = async (req, res) => {
  try {
    const result = await emailSchema.find();
    return res.status(201).send(result);
  } catch (err) {
    return res.status(500).send({ message: "Server Error" });
  }
};
