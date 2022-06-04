const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  time: {
    type: Date,
    required: true,
    unique: false,
  },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Event = model("event", eventSchema);
