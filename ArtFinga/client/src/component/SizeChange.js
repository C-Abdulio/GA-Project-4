import React from 'react';

export default function SizeChange(props){
  return(
    <div>
      <button onClick = {() => props.newSize(5)}>small</button>
      <button onClick = {() => props.newSize(10)}>Medium</button>
      <button onClick = {() => props.newSize(20)}>LARGE</button>
      <button onClick = {() => props.newSize(30)}>XTRA LARGE</button>
      {/* <button onClick = {() => props.newSize(props.newSize + 5)}>INCREASE</button>
      <button onClick = {() => props.newSize(props.newSize - 5)}>DECREASE</button>*/}
    </div>
  )
}
