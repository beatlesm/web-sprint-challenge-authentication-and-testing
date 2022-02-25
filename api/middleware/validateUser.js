module.exports = (req, res, next) => {
    /*      
      On FAILED registration due to `username` or `password` missing from the request body,      
      status 422
      {
        "message": "username and password required"
      }
    */
    next()
  }