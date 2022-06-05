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
    users: [User]
    time: Date!
    name: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    # TODO: query events
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(title: String!, time: Date!): Event
    # TODO: remove user, event, add user to event
  }
`;

module.exports = typeDefs;
