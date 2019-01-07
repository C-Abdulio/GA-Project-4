import React from 'react';

export default function ColorChange(props){
  return(
    <div>
      <button onClick = {() => props.newColor('pink')}>PINK</button>
    </div>
  )
}
