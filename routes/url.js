const express = require('express');
const router = express.Router();

const {handleGenerateNewShortURL, handleGetRedirectURL, handleAnalytics} = require('../controllers/url');

router.post('/', handleGenerateNewShortURL);

router.get('/:shortID', handleGetRedirectURL);

router.get('/analytics/:shortID', handleAnalytics);

module.exports = router;