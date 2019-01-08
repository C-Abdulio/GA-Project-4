import React, { Component } from 'react';
import './App.css';
import Canvas from './component/Canvas';
import NavBar from './component/NavBar';
import Footer from './component/Footer'
// import Welcome from './component/Welcome';
import Gallery from './component/Gallery';
import UserPage from './component/UserPage';
import axios from 'axios';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    currentView: " "

  }
  this.setView = this.setView.bind(this)
}

//call axios to GET the array of images
// const resp = async axios.get
//call axios to GET one images

//



getView(){
  const view = this.state.currentView;
  switch(view){
    case "gallery":
    return <Gallery />;
    case "userPage":
    return <UserPage />;
    default:
    return <Canvas />;
  }
}
setView(view){
  this.setState({
    currentView: view
  });
}

  render() {
    return (
      <div className="App">
          <NavBar handleChangeView = {this.setView}/>
          {this.getView()}
          <Footer />
      </div>
    );
  }
}

export default App;
