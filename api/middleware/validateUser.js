module.exports = (req, res, next) => {
    /*      
      On FAILED registration due to `username` or `password` missing from the request body,      
      status 422
      {
        "message": "username and password required"
      }
    */
    const { username, password } = req.body
    if (username && username.trim() && password && password.trim()) {
      next()      
    } else {        
      next({status: 422, message: 'username and password required'})
    }
  }