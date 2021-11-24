const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
  }
  type Pin {
    username: String,
    title: String,
    desc: String,
    rating: Number,
    long: Number,
    lat: Number,
  }
  type Query {
    users: [User]
    pins(userId: ID!): [Pin]
    pin(pinId: ID!): Pin
    me: User
  }
`;

module.exports = typeDefs;