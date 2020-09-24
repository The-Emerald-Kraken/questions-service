const express = require('express');

const app = express();

const Questions = require('../database/Question.js');

const bodyParser = require('body-parser');

const PORT = 3001;

app.use(bodyParser.json());

app.get('/api/questions', (req, res) => {
 console.log(Questions.read);
 
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
