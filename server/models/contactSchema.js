import mongoose from "mongoose";

const constactSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  createdon: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("contacts", constactSchema);
// contact
