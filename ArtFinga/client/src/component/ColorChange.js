import React from 'react';

export default function ColorChange(props){
  return(
    <div>
      <nav className= "colorNav">
        <div
        className = "colorBtn"
        id = "white"
        onClick = {() => props.newColor('white')}>
        WHITE
        </div>
        <div
        className = "colorBtn"
        id = "pink"
        onClick = {() => props.newColor('pink')}>
        PINK
        </div>
        <div
        className = "colorBtn"
        id = "red"
        onClick = {() => props.newColor('red')}>
        RED
        </div>
        <div
        className = "colorBtn"
        id = "orange"
        onClick = {() => props.newColor('orange')}>
        ORANGE
        </div>
        <div
        className = "colorBtn"
        id = "yellow"
        onClick = {() => props.newColor('yellow')}>
        YELLOW
        </div>
        <div
        className = "colorBtn"
        id = "green"
        onClick = {() => props.newColor('green')}>
        GREEN
        </div>
        <div
        className = "colorBtn"
        id = "teal"
        onClick = {() => props.newColor('teal')}>
        TEAL
        </div>
        <div
        className = "colorBtn"
        id = "blue"
        onClick = {() => props.newColor('blue')}>
        BLUE
        </div>
        <div
        className = "colorBtn"
        id = "violet"
        onClick = {() => props.newColor('violet')}>
        VIOLET
        </div>
        <div
        className = "colorBtn"
        id = "black"
        onClick = {() => props.newColor('black')}>
        BLACK
        </div>
      </nav>
    </div>
  )
}
