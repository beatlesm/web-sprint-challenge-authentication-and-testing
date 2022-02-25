require('dotenv').config() 

module.exports = {      
  PORT: process.env.PORT || 3300,
  NODE_ENV: process.env.NODE_ENV || 'development',
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
  SECRET: process.env.SECRET || 'keep it secret!!!!!',
  JWT_SECRET: process.env.JWT_SECRET || 'keep it secret!!!!!'
}