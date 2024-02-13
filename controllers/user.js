const USER = require('../models/user');
const {setUser} = require('../service/auth');

async function handleSignUp(req, res) {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({error: 'No body provided'});
    }

    const newUser = await USER.create({
        name: name,
        email: email,
        password: password
    });

    if(!newUser) {
        return res.status(400).json({error: 'User not created'});
    }

    return res.redirect('/');
}

async function handleLogin(req, res) {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(400).json({error: 'No body provided'});
    }

    const user = await USER.findOne({email, password});

    if(!user) {
        return res.render("login", {error: 'User not found'});
    }

    const token = setUser(user);

    //Send token in a cookie to client
    res.cookie('uid', token);

    return res.redirect('/');
}

module.exports = { handleSignUp, handleLogin }