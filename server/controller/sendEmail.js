import emailSchema from "../models/emailSchema.js";
import { mailer } from "./mailer.js";
import { newsmailer } from "./newsmailer.js";

export const sendEmail = async (req, res) => {
  try {
    const { emails, html, subject } = req.body;
    if (!emails || !html || !subject) {
      return res
        .status(400)
        .send({ message: "Please Enter all the requried field" });
    }
    for (let index in emails) {
      await newsmailer({
        email: emails[index],
        subject: subject,
        html,
      });
    }
    return res.status(201).send({
      message: "Email Started Sending",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }
};
