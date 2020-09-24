const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question_id: Number,
  product_id: Number,
  user: String,
  question_body: String,
  answer: [
    {
      id: Number,
      date: Number,
      body: String,
      user: String,
      helpful: {
        yes: Number,
        no: Number,
      },
    },
  ],
});

const Question = mongoose.model('Question', questionSchema);

const read = (cb) => {
  Question.find({}).exec()
    .then((result) => cb(null, result))
    .catch((err) => cb(err));
};

module.exports = { Question, read };
