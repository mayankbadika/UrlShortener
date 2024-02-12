const mongoose = require('mongoose');

async function connecttoDB(url) {
    mongoose.connect(url, {})
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log(err));
}

module.exports = {connecttoDB};