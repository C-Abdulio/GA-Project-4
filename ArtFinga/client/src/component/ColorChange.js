import React from 'react';

export default function ColorChange(props){
  return(
    <div>
      <nav className= "colorNav">
        <div
        className = "colorBtn"
        id = "white"
        onClick = {() => props.newColor('white')}>
        <p>WHITE</p>
        </div>
        <div
        className = "colorBtn"
        id = "pink"
        onClick = {() => props.newColor('pink')}>
        <p>PINK</p>
        </div>
        <div
        className = "colorBtn"
        id = "red"
        onClick = {() => props.newColor('red')}>
        <p>RED</p>
        </div>
        <div
        className = "colorBtn"
        id = "orange"
        onClick = {() => props.newColor('orange')}>
        <p>ORANGE</p>
        </div>
        <div
        className = "colorBtn"
        id = "yellow"
        onClick = {() => props.newColor('yellow')}>
        <p>YELLOW</p>
        </div>
        <div
        className = "colorBtn"
        id = "green"
        onClick = {() => props.newColor('green')}>
        <p>GREEN</p>
        </div>
        <div
        className = "colorBtn"
        id = "teal"
        onClick = {() => props.newColor('teal')}>
        <p>TEAL</p>
        </div>
        <div
        className = "colorBtn"
        id = "blue"
        onClick = {() => props.newColor('blue')}>
        <p>BLUE</p>
        </div>
        <div
        className = "colorBtn"
        id = "violet"
        onClick = {() => props.newColor('violet')}>
        <p>VIOLET</p>
        </div>
        <div
        className = "colorBtn"
        id = "black"
        onClick = {() => props.newColor('black')}>
        <p>BLACK</p>
        </div>
      </nav>
    </div>
  )
}
