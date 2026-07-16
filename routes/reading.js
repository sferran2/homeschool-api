const express = require('express');
const router = express.Router();

const readingController = require('../controllers/reading');

router.get('/', readingController.getAll);

router.get('/:id', readingController.getSingle);

router.post('/', readingController.createItem);

router.put('/:id', readingController.updateItem);

router.delete('/:id', readingController.deleteItem);

module.exports = router;