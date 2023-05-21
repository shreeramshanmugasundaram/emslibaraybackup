import contactSchema from "../models/contactSchema.js";
import { mailer } from "./mailer.js";

export const contact = async (req, res) => {
  try {
    const { fname, lname, email, phone } = req.body;
    if (!fname || !lname || !email || !phone) {
      return res
        .status(400)
        .send({ message: "Please fill all the required Details" });
    }
    const contact = await contactSchema.create({
      fname,
      lname,
      email,
      phone,
    });
    await mailer({
      fname,
      lname,
      email,
      phone,
      type: "contact",
      subject: "New Contact",
    });
    return res.status(201).send({
      message: "Contact Saved Successfully, Our Team will contact you shortly",
    });
  } catch (err) {
    return res.status(500).send({ message: "Server Error" });
  }
};
