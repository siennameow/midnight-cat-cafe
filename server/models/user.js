const { Schema, model } = require("mongoose");

// checks the password
const checkPassword = (loginPw, userPw) => {
  return bcrypt.compareSyn(loginPw, userPw);
};

const createPassword = async (newPw) => {
  const newHash = await bcrypt.hash(newPw, 10);
  return newHash;
};

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
  password: {
    type: String,
    required: true,
  },
});

const User = model("user", userSchema);
model.exports = User;
