import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue'

const Category = ({currentQuestion, answeredQuestions, title, selectQuestion, categories, currentClues}) => {
  return (
    <div className={'category' } data-testid="category">
    <div className='categoryTitle'>{title.toUpperCase()}</div>
    {currentClues.map((clue, i) => {
      var answered = () => { 
        if (answeredQuestions.indexOf(clue.id) !== -1){
        return true;
        } else{
          return false;
        }
      }
      return <Clue key={i} selectQuestion = {selectQuestion}
      currentQuestion = {clue.currentQuestion}
      answeredQuestions = {answeredQuestions}
      answered = {answered()}
      clueObj = {clue}/>
    })}

    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
