import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue'

const Category = ({currentQuestion, answeredQuestions, title, selectQuestion, categories, currentClues}) => {
  return (
    <div className={'category' } data-testid="category">
    <div className='categoryTitle'>{title.toUpperCase()}</div>
    {currentClues.map((clue, i) => {
      return <Clue key={i} selectQuestion = {selectQuestion}
      currentQuestion = {clue.currentQuestion}
      answeredQuestions = {answeredQuestions}
      clueObj = {clue}/>
    })}


      {/* <Clue
      selectQuestion = {selectQuestion}
      currentQuestion = {currentQuestion}
      answeredQuestions = {answeredQuestions}
      clueObj = {categories[0].clues[0].question}/> */}
      {/* display category */}
      {/* display clues for each category */}
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
