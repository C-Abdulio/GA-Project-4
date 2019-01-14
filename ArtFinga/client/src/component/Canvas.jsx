import React, { Component } from 'react';
import ColorChange from './ColorChange';
import SizeChange from './SizeChange';
 // import SaveForm from './SaveForm';
 import axios from 'axios';

export default class Canvas extends Component{
  //based on the work of Christian Nwamba
  constructor(props){
    super(props);
    this.state = {
      currentColor: '',
      currentSize: 5,
      savedPics: [],
      title:''
    }
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.endPaintEvent = this.endPaintEvent.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setSize = this.setSize.bind(this);
    this.clear = this.clear.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    componentDidMount(){ //determines the shape of the canvas
      this.canvas.width = 600;//width of the canvas
      this.canvas.height = 800;//height of the canvas
      this.ctx = this.canvas.getContext('2d');//determines what objects you get out of canvas

      // this.ctx.strokeStyle = this.colorChange();/*WE NEED THIS TO CHANGE INTO A HEX VALUE*/ //The strokeStyle property sets or
      this.ctx.lineJoin = 'round'; //determines the shapes of the lines
      this.ctx.lineCap = 'round'; //determines the shape of the brush
    }

    componentDidUpdate(){//determines the color and size of the brush
      this.ctx.strokeStyle = this.state.currentColor;/*WE NEED THIS TO CHANGE INTO A HEX VALUE*/ //The strokeStyle property sets or returns the color, gradient, or pattern used for strokes.
      this.ctx.lineWidth = this.state.currentSize;//determines size of the pen stroke //WE NEED TO CHANGE THIS INTO AN INTEGER
    }

    // componentWillUnmount(){
    //   this.props.savePics(this.state.savedPics)
    // }

    clear(){
      var context = this.canvas.getContext('2d');
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    sizeChange(){
      var size = this.state.currentSize;
      switch(size){
        case 'medium':// I would like o nthe change to this case...
        return size = 10;// that this.ctx.lineWidth equals to THIS integer
        case 'large':
        return 20;
        case 'x-large':
        return 30;
        default:
        return 5;
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

    async fetchSave(canvas, filepath){
    const dataURL = canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append('image', blob);
      formData.append('title', this.state.title)
      await axios.post(`/artworks`, formData, {
      	headers: {
      		'Content-Type': 'multipart/form-data',
      	}
      });
    }, 'image/jpeg');
    this.href = dataURL;
      this.setState(prevState => {
        return{
          savedPics:[
            ...prevState.savedPics,
           dataURL
          ]
        }
      })
    }

  handleChange(e){
    this.setState({
      title: e.target.value
    })
  }


  render(){
    return(
      <div className = "canvasStudio">
        <div className = "draw_n_Save">
            <canvas
            ref={(ref) => (this.canvas = ref)}
                  style={{ background: 'white' }}
                  onMouseDown={this.onMouseDown}
                  onMouseLeave={this.endPaintEvent}
                  onMouseUp={this.endPaintEvent}
                  onMouseMove={this.onMouseMove}
            />
          {/*<SaveForm />*/}
          <label>
            TITLE:
            <input
              onChange = {this.handleChange}
              name="title"
              value={this.state.title}
              type="text"
              placeholder="title"
              alt="title"/>

            <input
              onChange = {this.props.handleChange}
              name="name"
              value={this.props.name}
              type="text"
              placeholder="name"
              alt="name"/>
          </label>

          <button onClick={()=>this.fetchSave(this.canvas)}>save</button>

                 <div className = "buttons">
                <ColorChange newColor = {this.setColor} />
                <SizeChange newSize = {this.setSize} />
                </div>
                <button onClick={()=>this.clear()}>reset</button>
            </div>
      </div>

    );
  }
}
