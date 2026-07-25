const express = require('express');
const router = express.Router();

const readingController = require('../controllers/reading');
const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/', readingController.getAll);

router.get('/:id', readingController.getSingle);

router.post('/', isAuthenticated, readingController.createItem);

router.put('/:id', isAuthenticated, readingController.updateItem);

router.delete('/:id', isAuthenticated,   readingController.deleteItem);

module.exports = router;