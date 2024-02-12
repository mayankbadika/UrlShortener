const jwt = require('jsonwebtoken');
const secret = "mayank@learningstatelessauthentication";//process.env.JWT_SECRET;

//Below was for statefull session
//const sessionIdToUserMap = new Map();

function setUser(user) {
    return jwt.sign(JSON.stringify(user), secret);
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch(err) {
        return null;
    }
}

module.exports = {setUser, getUser};