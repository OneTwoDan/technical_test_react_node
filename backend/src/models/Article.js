const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    urlToImage: {
        type: String,
    },
    publishedAt: {
        type: Date,
    }
});

module.exports = mongoose.model('Article', articleSchema);
