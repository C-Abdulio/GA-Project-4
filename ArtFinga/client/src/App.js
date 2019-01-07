import React, { Component } from 'react';
import './App.css';
import Canvas from './component/Canvas';
// import Welcome from './component/Welcome';
// import ColorChange from './component/ColorChange';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    currentView: " "

  }
  // this.setView = this.setView.bind(this)
}



// getView(view){
//   switch(this.state.currentView){
//     case "canvas":
//     return <Canvas />
//     default:
//     return <Welcome />;
//   }
// }
// setView(view){
//   this.setState({
//     currentView: view
//   })
// }

  render() {
    return (
      <div className="App">
          <Canvas/>
        {/*<button onClick= {this.setView.bind("canvas")}>Activate Canvas</button>
        {this.getView()}*/}

      </div>
    );
  }
}

export default App;
