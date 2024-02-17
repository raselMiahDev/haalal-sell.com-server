const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      split: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("users", DataSchema);
module.exports = User;
