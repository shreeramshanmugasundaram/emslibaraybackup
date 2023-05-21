import nodemailer from "nodemailer";
export const mailer = async (data) => {
  try {
    let body = "";
    if (data.type === "email") {
      body = data.email;
    } else {
      body = `Name : ${data?.fname} ${data?.lname} \n Email :${data?.email} \n Phone :${data?.phone}`;
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "thefoodiebeecontact@gmail.com",
        pass: "gbvwqherlvzcbrmu",
      },
    });

    const mailOptions = {
      from: "thefoodiebeecontact@gmail.com",
      to: "shreeram.shanmugasundaram_entc21@pccoer.in",
      subject: data.subject,
      text: body,
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
