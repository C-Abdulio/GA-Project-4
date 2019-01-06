import React, { Component } from 'react';
// import ColorChange from './ColorChange';

export default class Canvas extends Component{
  //based on the work of Christian Nwamba
  constructor(props){
    super(props);
    this.state = {
      currentColor: '',
      cuurentSize: ''
    }
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.endPaintEvent = this.endPaintEvent.bind(this);
    this.setColor = this.setColor.bind(this);

  }

    paintOn = false; //default value for paintOn method, indicates that the user is currently not painting by using onMouseDown event

    line = [];

    prevPos = { offsetX: 0, offsetY: 0 };

    onMouseDown({ nativeEvent }) {
      const { offsetX, offsetY } = nativeEvent;
      this.paintOn = true;
      this.prevPos = { offsetX, offsetY };
    }

    onMouseMove({ nativeEvent}) {
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
    endPaintEvent(){
      if(this.paintOn){
        this.paintOn = false;
        // this.sendPaintData();
      }
    }

    paint(prevPos, currPos, strokeStyle){
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
      this.ctx.strokeStyle = this.state.Color; //The strokeStyle property sets or returns the color, gradient, or pattern used for strokes.
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
      this.ctx.lineWidth = this.state.Size;//determines size of the pen stroke
    }

    // sizeChange(){
    //   var size = this.state.currentColor;
    //   switch(size){
    //     case '10':
    //     return 10;
    //     case '15':
    //     return 15;
    //     case '20':
    //     return 20;
    //     default:
    //     return 5;
    //   }
    //
    // }

    colorChange(){
      const color = this.state.Color;
      switch(color){
        case 'black':
        return `#000000`;
        case 'pink':
        return `#EE92C2`;
        case 'red':
        return `#FF0000`;
        case 'orange':
        return `#FF6600`;
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
      <button onClick = {() => this.colorChange('pink')}>
      Pink
      </button>

      </div>

    );
  }
}
