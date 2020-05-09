require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const jwt = require("jsonwebtoken");

const app = express();
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const models = require("./models");

const getLoginUser = (req) => {
  const token = req.headers["x-auth-token"];
  if (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw Error("Session Expired!!");
    }
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    models,
    secret: process.env.JWT_SECRET,
    me: getLoginUser(req),
  }),
});

server.applyMiddleware({ app });

app.listen(3000, () => console.info("Apollo server is running on : 3000"));
