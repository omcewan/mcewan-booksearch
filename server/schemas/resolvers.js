const { User } = require('../models');

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find()
    }

    // get single user

  }
}

module.exports = resolvers