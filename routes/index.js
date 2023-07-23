const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question_Controller');
const optionController = require('../controllers/option_controller');

//console.log("Inside questions routes");

router.use('/questions', require('./question_routes'));
router.post('/questions/create', questionController.create);
router.delete('/options/:id/delete', optionController.delete);
router.put('/options/:id/add_vote', optionController.addVote);

module.exports = router;