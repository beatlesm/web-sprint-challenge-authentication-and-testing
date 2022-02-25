const router = require("express").Router()
const checkUserId  = require('../middleware/checkUserId')

const User = require("./users-model.js")

router.get("/",  (req, res, next) => {
    User.find()
      .then(users => {
        res.json(users)
      })
      .catch(next) 
  })

router.get("/:id", checkUserId, (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
        res.json(user)
        })
        .catch(next)
})  

module.exports = router