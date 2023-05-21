import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { contact } from "./controller/contact.js";
import { email } from "./controller/email.js";
import { fileURLToPath } from "url";
import { getemails } from "./controller/getemails.js";
import { sendEmail } from "./controller/sendEmail.js";
import userLogin from "./auth/auth.js";
import userCreate from "./auth/create.js";
import auth from "./middleware/auth.js";

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5000;
const DB =
  "mongodb+srv://thefoodiebeedb:0qvvHjSQ3aawtHqn@cluster0.jzjmhxp.mongodb.net/thefoodiebeedb?retryWrites=true&w=majority";

app.post("/contact", contact);
app.post("/email", email);

//Dashboard Routes
app.get("/emails", auth, getemails);
app.post("/sendemails", auth, sendEmail);

// login Routes
app.post("/auth", userLogin);
app.post(`/7796807129`, userCreate);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"), (err) => {
    res.status(500).send(err);
  });
});

mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
