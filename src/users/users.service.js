const User = require("./User");

const findByEmailUserService = (email) => User.findOne({ email: email });

const createService = (body) => User.create(body);

module.exports = { findByEmailUserService, createService };
