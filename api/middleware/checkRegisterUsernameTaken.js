const { findBy } = require('../users/users-model')

module.exports = async (req, res, next) => {
    /*
      On FAILED registration due to the `username` being taken
      status 422
      {
        "message": "username taken"
      }
    */
    try {
      const [user] = await findBy ({username: req.body.username})
      if(user) {
        next ({status: 422, message: 'username taken'})        
      } else {
        req.user = user
        next()
      }
      
    } catch(err) {
      next(err)
    }
  }