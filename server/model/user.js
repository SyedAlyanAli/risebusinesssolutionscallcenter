const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  emailaddress: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("User", User);
