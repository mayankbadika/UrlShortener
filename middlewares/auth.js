const {getUser} = require('../service/auth');

async function restricToLoggedinUserOnly(req, res, next) {
    //Getting user id from uid stored in cookie
    const userid = req.cookies?.uid;
    if(!userid) {
        return res.redirect('/login');
    }

    //if cookie returns a uuid that does not belong to any user, redirect to login
    const user = getUser(userid);
    if(!user) {
        return res.redirect('/login');
    }

    // middleware adds this so that we can use it to add to the urls createdby field
    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    const userid = req.cookies?.uid;
    
    const user = getUser(userid);
    //middleware adds this so that we can use it to add to the urls createdby fi
    req.user = user;
    next();
}

module.exports = {restricToLoggedinUserOnly, checkAuth};