import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Toggler ({text, onClickButton}) {
  const handleOnClick = () => {
    onClickButton();
  }

  return (
    <div className="containerButton">
<button 
className="button" 
onClick={handleOnClick}
>
=
</button>
</div>
  )
}

Toggler.propTypes = {
  text:PropTypes.string.isRequired,
  onClickButton:PropTypes.func.isRequired,
}


export default Toggler;
