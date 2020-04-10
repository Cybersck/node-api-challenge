const express = require('express');
const projectMiddle = require('../middleware/projectMiddleware');
const projectController = require('../controllers/projectController');
const router = express.Router();


router.get('/:id', projectMiddle.validateId, projectController.getProject);

router.post('/', projectMiddle.validateProject, projectController.addProject);

router.put('/:id', projectMiddle.validateId, projectMiddle.validateChanges, projectController.updateProject);

router.delete('/:id', projectMiddle.validateId, projectController.deleteProject)

router.get('/actions/:id', projectMiddle.validateId, projectController.getProjectActions);

module.exports = router; 