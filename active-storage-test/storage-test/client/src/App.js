import React, { Component } from 'react';
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
    try{
      // const PORT = "http://localhost:3000"
      const resp = await axios(`/artworks`);
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
        <
        <Gallery index = {this.state.imgData}/>
      </div>
    );
  }
}

export default App;
