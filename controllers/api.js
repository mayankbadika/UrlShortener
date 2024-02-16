const shortid = require('shortid');

const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body) {
        return res.status(400).json({error: 'No body provided'});
    }
    
    if(!req.user) {
        return res.status(401).json({error: 'Unauthorized'});
    }

    const shortId = shortid.generate(8);

    const newURL =await URL.create({
        shortId: shortId,
        redirectURL: req.body.redirectURL,
        visitHistory: [],
        createdBy: req.user._id
    });
    
    return res.status(201).json({
        shortId: shortId,
        shortURL: `http://localhost:8001/url/${shortId}`
    });
};

module.exports = { 
    handleGenerateNewShortURL
};