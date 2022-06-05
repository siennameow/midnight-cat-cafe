const { signToken } = require("../util/auth");
const { User, Event } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      User.find().populate(events);
    },
    user: async (parent, { username }) => {}, // TODO: complete these yo!
    me: User,
  },
  Mutation: {},
};

module.exports = resolvers;
