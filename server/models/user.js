const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

const User = model("user", userSchema);
model.exports = User;
