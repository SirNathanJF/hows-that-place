const { AuthenticationError } = require("apollo-server-errors");
const { User, Pin } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = resolvers;