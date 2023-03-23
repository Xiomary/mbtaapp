
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

<<<<<<< HEAD
const generateAccessToken = (userId, email, username, password, favline) => {
=======
const generateAccessToken = (userId, email, username, password, favline,favroute ) => {
>>>>>>> 44b3de4b6889a0b194decdccdb918fa036d42dc0
    return jwt.sign({id: userId, email, username, password, favline},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:'1m'
    })
 }

module.exports.generateAccessToken = generateAccessToken