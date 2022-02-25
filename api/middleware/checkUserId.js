const db = require('../../data/dbConfig')

module.exports = async (req, res, next) => {
    /*
      On FAILED find user with given id due to the the id with user not exist
      status 404
      {
        "message": "Could not find user with given id."
      }
    */      
    const user = await db('users').where('id', req.params.id).first()
    if (user) {
        next()
    } else {
        next({ message: 'Could not find user with given id.', status: 404 })
    }
    
}