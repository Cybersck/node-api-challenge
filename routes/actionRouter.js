const express = require('express');
const actionMiddle = require('../middleware/actionMiddleware');
const actionController = require('../controllers/actionController');
const projectMiddle = require ('../middleware/projectMiddleware');
const router = express.Router();


router.get('/:aid', actionMiddle.validateId, actionController.getAction);

router.post('/:id', projectMiddle.validateId, actionMiddle.validateAction, actionController.addAction);

router.put('/:aid', actionMiddle.validateId, actionMiddle.validateChanges, actionController.updateAction);

router.delete('/:aid', actionMiddle.validateId, actionController.deleteAction);

module.exports = router; 