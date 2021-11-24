const { AuthenticationError } = require("apollo-server-errors");
const { User, Pin } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
  }
}

module.exports = resolvers;