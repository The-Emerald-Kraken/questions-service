const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/rei_questions', { useNewUrlParser: true, useUnifiedTopology: true });

const questionSchema = mongoose.Schema({
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

const sampleData = [
        {
    question_id: 058,
    product_id: 017,
    user: 'BobbyB',
    question_body: 'Does this product fit both men and women?',
    answer: [
        {
        id: 023,
        body: 'Yes it does.',
        user: 'REI Helper Sally',
        helpful: {
            yes: 0,
            no: 1,
        },
        },
    ],
    }, 
    {
        question_id: 009,
        product_id: 043,
        user: 'Rachel098',
        question_body: 'How durable is this?',
        answer: [
            {
            id: 023,
            body: 'It can stand up to all your favortie activities.',
            user: 'REI Helper Jim',
            helpful: {
                yes: 2,
                no: 0,
            },
            }, 
            {
                id: 079,
                body: 'It tore after one week.',
                user: 'CaliBro43',
                helpful: {
                    yes: 1,
                    no: 3,
                },
                },
        ],
        },
]

const insertSampleData = () => {
    Question.create(sampleData)
        .then(() => mongoose.disconnect());
}

insertSampleData();

module.exports = { Question, db };
