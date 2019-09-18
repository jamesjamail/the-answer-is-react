import React from 'react';
import PropTypes from 'prop-types';


const Gameboard = ({currentQuestion, answeredQuestions, categories, selectQuestion}) => {
  return (
    <div data-testid="gameboard" id={currentQuestion.question ? 'question' : 'gameboard'}
    currentQuestion={currentQuestion}
    answeredQuestions={answeredQuestions}
    selectQuestion={selectQuestion}
    categories={categories}>

      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
