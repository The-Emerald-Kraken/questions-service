import React, { useState, useEffect } from 'react';

import axios from 'axios';

import styled from 'styled-components';

import QuestionList from './QuestionList.jsx';

import DropDown from './DropDown.jsx';

import LoadMore from './LoadMore.jsx';

import QuestionModal from './AnswerModal.jsx';

function App() {

	const [questions, setQuestions] = useState([]);
	const [numQuestions, setNumQuestions] = useState(5);
	// const [sort, setSort] = useState(null);
	
	const getQuestions = () => {
		axios.get('/api/products/questions')
		.then((data) => setQuestions(questions.concat(data.data)))
		.catch((err) => (err));
	};
	
	const incrementHelpfulCount = (quesId, ansId, option) => {
		axios.patch(`/api/products/questions/${quesId}/${ansId}/${option}`)
		.then((data) => console.log(`${option} count increased`))
		.catch((err) => (err));
	};

	useEffect(() => {
    getQuestions();
	}, [numQuestions]);
	
  return (
    <div>
      <div>
        <Wrapper>
            <QuestionButton>Ask a question</QuestionButton>
          <div>
            <Title>
							<div>Questions & Answers</div>
							</Title>
           <DropDown />
          </div>
        </Wrapper>
        <div>
          <QuestionList questions={questions} incrementHelpfulCount={incrementHelpfulCount}/>
        </div>
      </div>
      <div>
      <LoadMore numQuestions={numQuestions} setNumQuestions={setNumQuestions} getQuestions={getQuestions}/>
			</div>
			<Footer>
			<p>How are we doing? Give us feedback on this page.</p>
			</Footer>
    </div>
  );
}

const Wrapper = styled.section`
margin: auto;
width: 52%;
position: relative;
padding: 10px;
font-family: Stuart, Georgia, serif;
`;

const Title = styled.div`
font-family: Stuart, Georgia, serif;
font-size: 22px;
padding 10px;
position: relative;
padding-bottom: 30px;
padding-left: 0px;
width: 300px;
`;

const QuestionButton = styled.button`
background-color: #3973A1;
color: white;
border: none;
float: right;
padding: 13px;
border-radius: 3px;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 16px;
cursor: pointer;
&:hover {
	background-color: #2B455C;
}
`;

const Footer = styled.div`
margin: auto;
text-align: center;
width: 75%;
position: relative;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
border-bottom: 1px solid grey;
font-size: 14px;
`;

export default App;
