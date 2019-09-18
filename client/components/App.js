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
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }

  modifyScore(addOrSub, value, id){
    if (addOrSub === true){
      this.setState({
        score: this.state.score+value
      })
    }
    else{
      this.setState({
        score: this.state.score-value
      })
    }
    let updatedAnsweredQuestion = 
    this.setState({
      currentQuestion: {},
      answeredQuestions: [...this.state.answeredQuestions, id]
    })
    // answeredQuestions.push(id)
  }

  selectQuestion(event, question){
    this.setState({
      currentQuestion: question
    })
  }

  render() {
    console.log(this.state.answeredQuestions)
    return (
      <div id={'app'}>
        <Gameboard currentQuestion = {this.state.currentQuestion }
                 answeredQuestions = { this.state.answeredQuestions }
                 selectQuestion = {this.selectQuestion.bind(this)}
                 categories = {this.state.results}/>
        <Scoreboard score = {this.state.score}/>
        <Response clueObj= {this.state.currentQuestion}
                  method = {this.modifyScore.bind(this)}/>
      </div>
    );
  }
}
