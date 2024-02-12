const shortid = require('shortid');

const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body) {
        return res.status(400).json({error: 'No body provided'});
    }

    const shortId = shortid.generate(8);

    const newURL =await URL.create({
        shortId: shortId,
        redirectURL: req.body.redirectURL,
        visitHistory: [],
        createdBy: req.user._id
    });

    return res.render('home', {shortId: shortId});
    //return res.status(201).json({shortId: shortId});
};

async function handleGetRedirectURL(req, res) {
    const id = req.params.shortID;
    
    const entry = await URL.findOneAndUpdate(
        { shortId: id },
        { $push: {visitHistory: 
            { timestamp: Date.now() }
        }}
    );
    
    if(!entry) {
        return res.status(404).json({error: 'URL not found'});
    }

    return res.redirect(entry.redirectURL);
}

async function handleAnalytics(req, res) {
    const id = req.params.shortID;

    const url = await URL.findOne({shortId: id});

    if(!url) {
        return res.status(404).json({error: 'URL not found'});
    }

    return res.status(200).json({
        totalClicks: url.visitHistory.length,
        visitHistory: url.visitHistory
    });
}

module.exports = { 
    handleGenerateNewShortURL,
    handleGetRedirectURL,
    handleAnalytics
};