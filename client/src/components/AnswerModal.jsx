/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';
import Helpful from './Helpful.jsx';

function AnswerModal({
  show, setShow, question, incrementHelpfulCount,
}) {
  if (!show) {
    return null;
  }
  return (
    <div>
      <Modal>
        <CloseModal onClick={() => setShow(false)}>x</CloseModal>
        <div>
          <Title>Post answer</Title>
          <div>
            <User>{question.user} &#183; <Time>{moment(question.created_at).startOf('hour').fromNow()}</Time></User>
          </div>
          <div><Body>{question.question_body}</Body></div>
          <Help><Helpful question={question} incrementHelpfulCount={incrementHelpfulCount} /></Help>
          <InputBox>
            Answer
            <form>
              <AnswerBody placeholder="Answer the question..." />
            </form>
          </InputBox>
          <PostButton>Post answer</PostButton>
        </div>
      </Modal>
    </div>
  );
}

AnswerModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  question: PropTypes.shape().isRequired,
  incrementHelpfulCount: PropTypes.func.isRequired,
};

const AnswerBody = styled.textarea`
position: static;
width: 95%;
height: 75px;
resize: none;
`;

const Help = styled.div`
margin-left: 18px;
margin-top: 20px;
`;

const Title = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 25px;
margin-left: 10px;
margin-bottom: 50px;
font-weight: 325;
`;

const User = styled.div`
font-family: Stuart, Georgia, serif;
font-weight: 800;
font-size 18px;
margin-left: 20px;
display: inline-flex;
flex-direction: row;
`;

const Time = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 15px;
margin-left: 2px;
font-weight: normal;
`;

const Body = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 21px;
font-weight: 700;
margin-left: 18px;
`;

const InputBox = styled.div`
font-family: Stuart, Georgia, serif;
font-size: 20px;
font-weight: 600;
margin-left: 40px;
margin-top: 60px;
`;

const Modal = styled.div`
width: 800px;
height: 500px;
margin: auto;
display: table;
position: relative;
left: 0;
right:0;
top: 15%; 
background: white;
border: 1px solid;
tansition: 2s ease-out;
filter: blur(0);
transform: scale(1);
opacity: 5;
visibility: visible;
z-index: 10;
`;

const CloseModal = styled.button`
background-color: black;
color: white;
border-radius: 10px;
border: none;
padding-top: 1px;
font-weight: 600;
margin-left: 900px;
cursor: pointer;
`;

const PostButton = styled.button`
background-color: #3973A1;
border: none;
color: white;
margin-top: 10px;
margin-left: 40px;
padding: 10px 20px 10px 20px;
text-align: center;
font-weight: 600;
font-size: 19px;
border-radius: 2px;
`;

export default AnswerModal;
