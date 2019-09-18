import React from 'react';
import PropTypes from 'prop-types';

const Clue = ({clueObj, selectQuestion}) => {
  // <h1>{"something"}</h1>
  
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  return (
  <div onClick={(event) => selectQuestion(event, clueObj)} className='clueValue'> ${clueObj.value} </div>)
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
