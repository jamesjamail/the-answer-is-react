import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const Categories = ({currentQuestion, answeredQuestions, categories, selectQuestion}) => {
  return (
    <div id={'categories'} data-testid="categoryList">
    {categories.map((category, i) => {
      return <Category key= {i} currentQuestion = {currentQuestion}
      selectQuestion = {selectQuestion}
      answeredQuestions = {answeredQuestions}
      title = {category.title} 
      categories = {categories}
      currentClues = {categories[i].clues}/>;
      }
    )
  }
      
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
