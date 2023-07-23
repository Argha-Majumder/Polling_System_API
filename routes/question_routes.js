const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question_Controller');
const optionController = require('../controllers/option_controller');

// router.post('/options', optionController.create);
router.get('/', questionController.view);
router.get('/:id', questionController.viewOneQuestion);
router.delete('/:id/delete', questionController.delete);
router.post('/:id/options/create', optionController.create);

module.exports = router;