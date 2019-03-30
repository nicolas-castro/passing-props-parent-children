import React from 'react';
import ComponentC from './ComponentC';

const ComponentB  = ({x, onXClick}) => {
  return ( 
    <div>
      <h1>Component B</h1>
      <ComponentC x={x} onXClick={onXClick}/>
    </div>
   );
}
 
export default ComponentB ;