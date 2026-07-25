const express = require('express');
const router = express.Router();

const mathController = require('../controllers/math');
const isAuthenticated = require('../middleware/isAuthenticated');

/*  #swagger.tags = ['Math Materials']
    #swagger.description = 'Get all math materials'
*/
router.get('/', mathController.getAll);

/*  #swagger.tags = ['Math Materials']
    #swagger.description = 'Get a math material by ID'
*/
router.get('/:id', mathController.getSingle);

/*  #swagger.tags = ['Math Materials']
    #swagger.description = 'Create a new math material'
*/
router.post('/', isAuthenticated, mathController.createItem);

/*  #swagger.tags = ['Math Materials']
    #swagger.description = 'Update a math material'
*/
router.put('/:id', isAuthenticated, mathController.updateItem);

/*  #swagger.tags = ['Math Materials']
    #swagger.description = 'Delete a math material'
*/
router.delete('/:id', isAuthenticated, mathController.deleteItem);

module.exports = router;