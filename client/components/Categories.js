import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({currentQuestion, answeredQuestions, categories, selectQuestion}) => {
  return (
    <div id={'categories'} data-testid="categoryList"
    currentQuestion = {currentQuestion}
    selectQuestion = {selectQuestion}
    answeredQuestions = {answeredQuestions}>
      {/* display all the categories */}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;
