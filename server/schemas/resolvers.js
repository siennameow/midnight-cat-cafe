const { signToken } = require("../util/auth");
const { User, Event } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { events } = require("../models/user");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    events: async () => {
      return Event.find({}).populate("users");
    },
    event: async (parent, { title }) => {
      return Event.findOne({ title }).populate("users");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const isCorrectPassword = await user.isCorrectPassword(password);

      if (!isCorrectPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addEvent: async (parent, { title, time }) => {
      const newEvent = {
        title,
        time: new Date(time),
      };
      return Event.create(newEvent);
    },
    deleteMe: async (parent, args, context) => {
      if (context.user) {
        await User.findByIdAndDelete(context.user._id);
        return "User deleted";
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addMeToEvent: async (parent, { title }, context) => {
      if (context.user) {
        const event = await Event.findOne({ title });
        if (!event) {
          throw new UserInputError("No event of that title found");
        }
        event.users.push(context.user._id);
        return event.save();
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
