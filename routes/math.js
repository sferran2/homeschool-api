const express = require('express');
const router = express.Router();

const mathController = require('../controllers/math');
const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/', mathController.getAll);

router.get('/:id', mathController.getSingle);

router.post('/', isAuthenticated, mathController.createItem);

router.put('/:id', isAuthenticated, mathController.updateItem);

router.delete('/:id', isAuthenticated, mathController.deleteItem);

module.exports = router;