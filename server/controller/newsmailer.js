import nodemailer from "nodemailer";
export const newsmailer = async (data) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "thefoodiebeecontact@gmail.com",
        pass: "gbvwqherlvzcbrmu",
      },
    });

    const mailOptions = {
      from: "thefoodiebeecontact@gmail.com",
      to: data.email,
      subject: data.subject,
      html: data.html,
      headers: {
        "X-Laziness-level": 1000,
      },
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  } catch (error) {}
};
