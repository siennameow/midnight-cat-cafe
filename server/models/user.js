const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// checks the password
const checkPassword = (loginPw, userPw) => {
  return bcrypt.compareSyn(loginPw, userPw);
};

const createPassword = async (newPw) => {
  const newHash = await bcrypt.hash(newPw, 10);
  return newHash;
};

const userSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// has the password every time we add a user or change their password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    // 10 rounds by default
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// comparison for loggin in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);
model.exports = User;
