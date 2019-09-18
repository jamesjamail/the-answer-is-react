import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Response extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userResponse: ''
    }
    this.recordResponse = this.recordResponse.bind(this);
  }
  recordResponse(newText) {
    this.setState({ userResponse: newText.target.value });
  }
  submitResponse(event) {
    let response = this.state.userResponse;
    if(response === this.props.clueObj.answer){
      
      this.props.method(true, this.props.clueObj.value, this.props.clueObj.id)
    }
    else{
      this.props.method(false, this.props.clueObj.value, this.props.clueObj.id)
    }

    // console.log('something')
    // this function should fire when the user fills the response and hits 'enter'
    // if (event.value === clueObj.answer){
    //   setState score += clue
    // }
      // Is the user response correct? 
      // yes/no? What should happen?
      //remove tile
        //if yes, add points to score
        //if no, remove points from score
  }
  render(){

    return (
      <div id={'response'} data-testid="response">
        <input
          type='text'
          placeholder='Answers go here!'
          onChange = {this.recordResponse}
          onKeyDown= { () => {
              if (event.key === 'Enter'){
                this.submitResponse()
              }
            }
          }
          // handle data change
          // handle when 'enter' is hit
        >
        </input>
      </div>
    )
  }
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}