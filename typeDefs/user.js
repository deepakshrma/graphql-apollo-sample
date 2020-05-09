const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    users: [User]
    user(id: Int!): User
  }

  extend type Mutation {
    createUser(name: String!): User!
    removeUser(id: Int!): Boolean
    register(name: String!, username: String!, password: String!): Boolean
    login(username: String!, password: String!): Token
  }

  type User {
    id: Int!
    name: String!
    username: String!
    car: [Car]
  }

  type Token {
    token: String!
  }
`;
module.exports = typeDefs;
