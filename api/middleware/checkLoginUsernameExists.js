const { findBy } = require('../users/users-model')

module.exports = async (req, res, next) => {
    /*
      On FAILED registration due to the `username` being taken
      status 422
      {
        "message": "username taken"
      }
    */
    next()
  }