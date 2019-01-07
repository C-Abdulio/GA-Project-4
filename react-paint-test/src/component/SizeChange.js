import React from 'react';

export default function SizeChange(props){
  return(
    <div>
      <button onClick = {() => props.newSize('10')}>INCREASE</button>
    </div>
  )
}
