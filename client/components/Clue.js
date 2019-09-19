import React from 'react';
import PropTypes from 'prop-types';

const Clue = ({clueObj, selectQuestion, answered}) => {
  // <h1>{"something"}</h1>
  
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  if (answered){
    return (
      <div className='clueValue'>-</div>)
  }
  else{
    return (
      <div onClick={(event) => selectQuestion(event, clueObj)} className='clueValue'> ${clueObj.value} </div>)
  }
  
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
