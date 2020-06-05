import React from 'react';

export default React.forwardRef((props,ref) => {

  return(
    <button ref={ref} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            onClick={props.handleClick}
            name={props.name}
    >{props.text}</button>
  )
})
