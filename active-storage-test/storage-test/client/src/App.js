import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Gallery from './Gallery.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgData: []
    }
  }

  async fetchData(){
    debugger;
    try{
      const PORT = "http://localhost:3001"
      const resp = await axios(`${PORT}/artworks`);
      const list = resp.data;
      this.setState({
        imgData:list
      })
    }catch(error){
      console.log(error)
    }

}

componentDidMount(){
  this.fetchData();
}

  render() {
    return (
      <div className="App">

        <Gallery index = {this.state.imgData}/>
      </div>
    );
  }
}

export default App;
