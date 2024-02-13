const {getUser} = require('../service/auth');

//Authorization middleware
function checkforAuthentication(req, res, next) {
    //Getting user id from uid stored in cookie, this cookie is sent by browser
    const userid = req.cookies?.uid;
    req.user = null;
    if(!userid) {
        return next();
    }

    //if cookie returns a uuid that does not belong to any user, redirect to login
    const user = getUser(userid);

    // middleware adds this so that we can use it to add to the urls createdby field
    req.user = user;
    next();
}

//Authorization middleware
function restrictToRole(roles =[]) {
    return (req, res, next) => {
        if(!req.user) return res.redirect('/login');

        if(!roles.includes(req.user.role)) {
            return res.status(401).json({error: 'Unauthorized'});
        }

        next();
    }
}

module.exports = {restrictToRole, checkforAuthentication};