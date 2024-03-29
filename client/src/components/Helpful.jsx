/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Helpful = ({ question, incrementHelpfulCount }) => {
  const [quesId] = useState(question.question_id);
  const [ansId] = useState(question.answers[0]._id);
  const [yes, setYes] = useState(question.answers[0].helpful.yes);
  const [no, setNo] = useState(question.answers[0].helpful.no);

  return (
    <p>
      Helpful?
      <HelpfulButton
        className="yes"
        onClick={() => {
          incrementHelpfulCount(quesId, ansId, 'yes');
          setYes(yes + 1);
        }}>Yes &#183; {yes}
      </HelpfulButton> <HelpfulButton
        className="no"
        onClick={() => {
          incrementHelpfulCount(quesId, ansId, 'no');
          setNo(no + 1);
        }}>No &#183; {no}
      </HelpfulButton> <HelpfulButton>Report as inappropriate</HelpfulButton>
    </p>
  );
};

Helpful.propTypes = {
  question: PropTypes.shape().isRequired,
  incrementHelpfulCount: PropTypes.func.isRequired,
};

const HelpfulButton = styled.button`
background-color: white;
border: 1px solid grey;
border-radius: 2px;
padding: 7px;
&:hover {
box-shadow: inset 0 0 3px #000000;
cursor: pointer;
  }
  position: relative;
`;

export default Helpful;
