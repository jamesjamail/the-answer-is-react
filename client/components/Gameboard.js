import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';


const Gameboard = ({currentQuestion, answeredQuestions, categories, selectQuestion}) => {
  if (JSON.stringify(currentQuestion) === JSON.stringify({})) {
    return (
      <div data-testid="gameboard" id='gameboard'>
        
        <Categories currentQuestion={currentQuestion}
        answeredQuestions={answeredQuestions}
        selectQuestion={selectQuestion}
        categories={categories}/>
  
        {/* was a question clicked?  */}
        {/* Yes? Show clue */}
        {/* No? Show Categories */}
      </div>
    );
  }
  else {
    return (
    <div id='question'>{currentQuestion.question}</div>
    )
  }
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
