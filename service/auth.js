const jwt = require('jsonwebtoken');
const secret = "mayank@learningstatelessauthentication";//process.env.JWT_SECRET;

//Below was for statefull session
//const sessionIdToUserMap = new Map();

function setUser(user) {
    return jwt.sign({
        email: user.email, 
        _id: user._id,
        role: user.role
    }, secret);
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