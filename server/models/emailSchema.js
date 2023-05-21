import mongoose from "mongoose";

const emailSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  createdon: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("emails", emailSchema);
