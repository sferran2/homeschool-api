const express = require('express');
const router = express.Router();

const mathController = require('../controllers/math');
const isAuthenticated = require('../middleware/isAuthenticated');

router.get(
  '/',
  /*
    #swagger.tags = ['Math Materials']
    #swagger.description = 'Get all math materials'
  */
  mathController.getAll
);

router.get(
  '/:id',
  /*
    #swagger.tags = ['Math Materials']
    #swagger.description = 'Get one math material by ID'
  */
  mathController.getSingle
);

router.post(
  '/',
  /*
    #swagger.tags = ['Math Materials']
    #swagger.description = 'Create a new math material'
  */
  isAuthenticated,
  mathController.createItem
);

router.put(
  '/:id',
  /*
    #swagger.tags = ['Math Materials']
    #swagger.description = 'Update a math material by ID'
  */
  isAuthenticated,
  mathController.updateItem
);

router.delete(
  '/:id',
  /*
    #swagger.tags = ['Math Materials']
    #swagger.description = 'Delete a math material by ID'
  */
  isAuthenticated,
  mathController.deleteItem
);

module.exports = router;