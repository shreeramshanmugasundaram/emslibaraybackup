import emailSchema from "../models/emailSchema.js";
import { mailer } from "./mailer.js";
import { newsmailer } from "./newsmailer.js";

export const email = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .send({ message: "Please fill all the required Details" });
    }
    const alreadyexist = await emailSchema.findOne({ email: email });
    console.log(alreadyexist);
    if (alreadyexist) {
      return res.status(400).send({ message: "You are already Subscribed" });
    }

    const result = await emailSchema.create({
      email,
    });
    await mailer({ email, type: "email", subject: "New Subscriber" });

    const html = `<html><center><h1>Welcome to EMS Library Newsletter</h1></center> <p style = 'margin:5rem auto;width:min(92%,45rem);color:#333;'>Dear Subscriber,
      <br/>
      <br/>
      Thank you for subscribing to our library's newsletter! We're thrilled to have you on board.
      <br/>
      <br/>
      Our weekly/monthly newsletter is designed to keep you up-to-date with the latest news and happenings at our library. We'll share information about new books and resources, competitive exam study material, upcoming events and workshops, and other exciting opportunities to help you make the most of your library membership.
      <br/>
      <br/>
      
      In addition to our online newsletter, we also encourage you to visit our library in person to take advantage of our quiet study spaces and extensive collection of books and other resources. Our friendly staff members are always on hand to help you find what you need and answer any questions you may have.
      <br/>
      <br/>
      
      If you have any specific topics or areas of interest you'd like us to cover in future newsletters, please don't hesitate to let us know. We're always looking for ways to better serve our readers and provide the information and resources that matter most to you.
      <br/>
      <br/>
      
      Thank you again for subscribing, and we look forward to keeping in touch!
      <br/>
      <br/>
      
      Best regards,
      <br/>
      Ankur Tharwan
      <br/>
      EMS Library
      <br/>
      
      </p></html>`;

    await newsmailer({
      email,
      subject: "EWS Library : Newsletter Subscribed Successfully",
      html,
    });

    return res.status(201).send({
      message: "Subscribed Successfully",
    });
  } catch (err) {
    return res.status(500).send({ message: "Server Error" });
  }
};
