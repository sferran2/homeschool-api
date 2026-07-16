const express = require('express');
const router = express.Router();

const mathController = require('../controllers/math');

router.get('/', mathController.getAll);

router.get('/:id', mathController.getSingle);

router.post('/', mathController.createItem);

router.put('/:id', mathController.updateItem);

router.delete('/:id', mathController.deleteItem);

module.exports = router;