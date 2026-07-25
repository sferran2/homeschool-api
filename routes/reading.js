const express = require('express');
const router = express.Router();

const readingController = require('../controllers/reading');
const isAuthenticated = require('../middleware/isAuthenticated');

router.get(
  '/',
  /*
    #swagger.tags = ['Reading Materials']
    #swagger.description = 'Get all reading materials'
  */
  readingController.getAll
);

router.get(
  '/:id',
  /*
    #swagger.tags = ['Reading Materials']
    #swagger.description = 'Get one reading material by ID'
  */
  readingController.getSingle
);

router.post(
  '/',
  /*
    #swagger.tags = ['Reading Materials']
    #swagger.description = 'Create a new reading material'
  */
  isAuthenticated,
  readingController.createItem
);

router.put(
  '/:id',
  /*
    #swagger.tags = ['Reading Materials']
    #swagger.description = 'Update a reading material by ID'
  */
  isAuthenticated,
  readingController.updateItem
);

router.delete(
  '/:id',
  /*
    #swagger.tags = ['Reading Materials']
    #swagger.description = 'Delete a reading material by ID'
  */
  isAuthenticated,
  readingController.deleteItem
);

module.exports = router;