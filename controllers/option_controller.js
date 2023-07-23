const Option = require('../models/options');
const Question = require('../models/questions');

//console.log("Inside option controller");
let questionId;
module.exports.create = async (req, res) => {
    try {
        let createOption = new Option(req.body);

        questionId = req.params.id;
        //console.log(req.params.id);
        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }
        const link = `http://localhost:8000/options/${createOption._id}/add_vote`;
        createOption.link_to_vote = link;
        const insertOption = await createOption.save();
        question.options.push(insertOption._id);
        await question.save();
        res.status(201).json(insertOption);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

module.exports.addVote = async (req, res) => {
    try {
        let oneOption = await Option.findById(req.params.id);
        if (!oneOption) {
            return res.status(404).json({message: "Can't find the option"});
        }
        oneOption.votes = oneOption.votes+1;
        const newOption = await oneOption.save();
        res.json(newOption);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports.delete = async (req, res) => {
    try {
        let oneOption = await Option.findById(req.params.id);
        if (!oneOption) {
            return res.status(404).json({message: "Can't find the option"});
        }
        if (oneOption.votes > 0) {
            return res.status(400).json({message: "Can't delete the option because votes exist"});
        }
        let question = await Question.findByIdAndUpdate(questionId, { $pull: {options: req.params.id}});
        await Option.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted successfully"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}