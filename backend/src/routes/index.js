const express = require('express');
const articlesRoutes = require('./articlesRoutes')

const router = express.Router();

router.use('/articles', articlesRoutes);

module.exports = router;