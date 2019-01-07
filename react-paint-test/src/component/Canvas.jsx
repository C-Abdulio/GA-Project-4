import React, { Component } from 'react';
import ColorChange from './ColorChange';
import SizeChange from './SizeChange';

export default class Canvas extends Component{
  //based on the work of Christian Nwamba
  constructor(props){
    super(props);
    this.state = {
      currentColor: '',
      currentSize: 5
    }
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.endPaintEvent = this.endPaintEvent.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setSize = this.setSize.bind(this);

  }
    strokeStyle= '';//controls the color value
    paintOn = false; //default value for paintOn method, indicates that the user is currently not painting by using onMouseDown event

    line = []; //the array where the line data will go as you draw. Array increases as more lines are added.

    prevPos = { offsetX: 0, offsetY: 0 };//calculates the previous position, so canvas can join this with your current position when drawing

    onMouseDown({ nativeEvent }) { //activates the paintOn event, which ensures that you can draw on canvas
      const { offsetX, offsetY } = nativeEvent;
      this.paintOn = true;
      this.prevPos = { offsetX, offsetY };
    }

    onMouseMove({ nativeEvent}) { //calaculates positioning and checks if user is currently drawing
      if(this.paintOn) {
        const { offsetX, offsetY } = nativeEvent;
        const offSetData =  { offsetX, offsetY }
        //set start and stop position of paint nativeEvent
        const positionData = {
            start: { ...this.prevPos },
            stop: { ...offSetData }
        };
        //Add position to line array
        this.line = this.line.concat(positionData);
        this.paint(this.prevPos, offSetData, this.strokeStyle)
      }
    }
    endPaintEvent(){// stops drawing function on release of onMouseUp
      if(this.paintOn){
        this.paintOn = false;
        // this.sendPaintData();
      }
    }

    paint(prevPos, currPos, strokeStyle){//controls the rendering of lines
      const { offsetX, offsetY } = currPos;
      const { offsetX:x, offsetY:y } = prevPos;

      this.ctx.beginPath();
      this.ctx.strokeStyle = strokeStyle;
      //move the prevPos of mouse
      this.ctx.moveTo(x, y);
      //draw a line to the current position
      this.ctx.lineTo(offsetX, offsetY);
      //render the stroke
      this.ctx.stroke();
      this.prevPos = { offsetX, offsetY };
    }
    componentDidMount(){ //determines the shape and size of the brush
      this.canvas.width = 1000;//width of the canvas
      this.canvas.height = 800;//height of the canvas
      this.ctx = this.canvas.getContext('2d');//determines
      // this.ctx.strokeStyle = this.colorChange();/*WE NEED THIS TO CHANGE INTO A HEX VALUE*/ //The strokeStyle property sets or returns the color, gradient, or pattern used for strokes.
      this.ctx.lineJoin = 'round'; //determines the shapes of the lines
      this.ctx.lineCap = 'round'; //determines the shape of the brush
      // this.ctx.lineWidth = this.state.Size;//determines size of the pen stroke //WE NEED TO CHANGE THIS INTO AN INTEGER
    }

    componentDidUpdate(){
      this.ctx.strokeStyle = this.state.currentColor;/*WE NEED THIS TO CHANGE INTO A HEX VALUE*/ //The strokeStyle property sets or returns the color, gradient, or pattern used for strokes.
      this.ctx.lineWidth = this.state.currentSize;//determines size of the pen stroke //WE NEED TO CHANGE THIS INTO AN INTEGER
    }

    sizeChange(){
      var size = this.state.currentSize;
      switch(size){
        case 10:// I would like o nthe change to this case...
        return 'medium';// that this.ctx.lineWidth equals to THIS integer
        case 20:
        return 'large';
        case 30:
        return 'x-large';
        default:
        return 'small';
      }
    }

    setSize(size){
      this.setState({
        currentSize:size
      })
    }

    colorChange(){
      const colorChoice = this.state.currentColor;
      switch(colorChoice){
        case 'black': //I Would like on the change to this case...
        return `#000000`;//That this.ctx.strokeStyle equals to THIS hex value
        case 'pink':
        return `#EE92C2`;
        case 'red':
        return `#FF0000`;
        case 'orange':
        return `#FF6600`;
        case 'yellow':
        return `#FF0`;
        case 'green':
        return `#88FF00`;
        case 'teal':
        return `#28DDCC`;
        case 'blue':
        return `#0000FF`;
        case 'violet':
        return `#aa00FF`
        default:
        return `#FFFFFF`;
      }
    }

    setColor(color){
      this.setState({
        currentColor:color
      })
    }

  render(){
    return(
      <div>
      <canvas
      ref={(ref) => (this.canvas = ref)}
            style={{ background: 'white' }}
            onMouseDown={this.onMouseDown}
            onMouseLeave={this.endPaintEvent}
            onMouseUp={this.endPaintEvent}
            onMouseMove={this.onMouseMove}
      />
      {/* <button onClick = {() => this.colorChange('pink')}>
      Pink
       </button>*/}
           <div className = "buttons">
          <ColorChange newColor = {this.setColor} />
          <SizeChange newSize = {this.setSize} />
          </div>
      </div>

    );
  }
}
