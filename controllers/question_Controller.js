const Question = require('../models/questions');
const Option = require('../models/options');

module.exports.create = async function(req, res) {
    try {
        let createQuestions = new Question(req.body);
        const insertNewQuestions = await createQuestions.save();
        res.status(201).json(insertNewQuestions);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

module.exports.view = async function(req, res) {
    try {
        let questions = await Question.find({});
        res.json(questions);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports.viewOneQuestion = async function(req, res) {
    try {
        let question = await Question.findById(req.params.id).populate('options');
        if (!question) {
            return res.status(404).json({message: "Cannot find the question"});
        }
        res.json(question);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports.delete = async (req, res)=> {
    try {
        let question = await Question.findById(req.params.id);
        //console.log(question);
        if (!question) {
            return res.status(404).json({message: "Cannot find the question"});
        }
        for (let option of question.options) {
            let optionId = option._id;
            let optionData = await Option.findById(optionId);
            let votes = optionData.votes;
            if (votes > 0) {
                return res.status(400).json({message: "Cannot delete the question because votes exist"});
            }
        }
        for (let option of question.options) {
            let optionId = option._id;
            await Option.findByIdAndDelete(optionId);
        }
        await Question.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted successfully"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}