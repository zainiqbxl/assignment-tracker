// routes/assignments.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/assignmentsController');

// home splash
router.get('/', controller.home);

// sssignments list
router.get('/assignments', controller.list);

// new
router.get('/assignments/new', controller.showNewForm);
router.post('/assignments', controller.create);

// edit
router.get('/assignments/:id/edit', controller.showEditForm);
router.put('/assignments/:id', controller.update);

// delete (method-override will turn POST->DELETE)
router.delete('/assignments/:id', controller.delete);

module.exports = router;
