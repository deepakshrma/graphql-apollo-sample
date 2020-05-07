const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    users: [User]
    user(id: Int!): User
    me: User
  }

  extend type Mutation {
    createUser(id: ID!, name: String!): User!
    removeUser(id: Int!): Boolean
  }

  type User {
    id: Int!
    name: String!
    car: [Car]
  }
`;
module.exports = typeDefs;
