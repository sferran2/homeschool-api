const express = require('express');
const router = express.Router();

const readingController = require('../controllers/reading');
const isAuthenticated = require('../middleware/isAuthenticated');

/*  #swagger.tags = ['Reading Materials']
    #swagger.description = 'Get all reading materials'
*/
router.get('/', readingController.getAll);

/*  #swagger.tags = ['Reading Materials']
    #swagger.description = 'Get a reading material by ID'
*/
router.get('/:id', readingController.getSingle);

/*  #swagger.tags = ['Reading Materials']
    #swagger.description = 'Create a new reading material'
*/
router.post('/', isAuthenticated, readingController.createItem);

/*  #swagger.tags = ['Reading Materials']
    #swagger.description = 'Update a reading material'
*/
router.put('/:id', isAuthenticated, readingController.updateItem);

/*  #swagger.tags = ['Reading Materials']
    #swagger.description = 'Delete a reading material'
*/
router.delete('/:id', isAuthenticated, readingController.deleteItem);

module.exports = router;