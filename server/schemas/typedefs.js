const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Event {
    title: String!
    users: [User]
    time: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    events: [Event]
    event(title: String!): Event
    getMyEvents: [Event]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(title: String!, time: String!): Event
    deleteMe: String
    addMeToEvent(title: String!): Event
    removeMeFromEvent(title: String!): Event
  }
`;
module.exports = typeDefs;
