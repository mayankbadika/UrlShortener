const express = require('express');
const router = express.Router();
const { handleGenerateNewShortURL } = require('../controllers/api');

router.post('/url', handleGenerateNewShortURL);

module.exports = router;