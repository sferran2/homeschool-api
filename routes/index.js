const express = require('express');
const router = express.Router();

router.use('/math', require('./math'));
router.use('/reading', require('./reading'));
router.use('/auth', require('./auth'));
router.use('/api-docs', require('./swagger'));

module.exports = router;