import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';
import Response from './Response';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: categories,
      currentQuestion: {question: 'is this working?'},
      answeredQuestions: ['ur mama'],
      score: 0
    };
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }
  render() {
    return (
      <div id={'app'}>
        What is Reactor 2?
        <Gameboard currentQuestion = {this.state.currentQuestion }
                 answeredQuestions = { this.state.answeredQuestions }
                 selectQuestion = {function(){return 'this is a placeholder'}}
                 categories = {this.state.results}/>
        <Scoreboard />
        <Response />
      </div>
    );
  }
}
