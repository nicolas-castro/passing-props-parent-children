import React from 'react';

const ComponentD  = ({x, onXClick}) => {
  return ( 
    <div>
      <h1>Component D</h1>
      <button onClick={onXClick} >{x}</button>
    </div>
   );
}
 
export default ComponentD ;