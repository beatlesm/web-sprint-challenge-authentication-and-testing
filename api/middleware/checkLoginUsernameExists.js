const { findBy } = require('../users/users-model')

module.exports = async (req, res, next) => {
    /*      
      On FAILED login due to `username` not existing in the db
      status 401
      {
        "message": "invalid credentials"
      }
    */
      try {
        const [user] = await findBy ({username: req.body.username})
        if(!user) {
          next ({status: 401, message: 'invalid credentials'})        
        } else {
          req.user = user
          next()
        }
        
      } catch(err) {
        next(err)
      }
  }