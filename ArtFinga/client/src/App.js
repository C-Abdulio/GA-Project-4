import React, { Component } from 'react';
import './App.css';
import Canvas from './component/Canvas';
import NavBar from './component/NavBar';
import Footer from './component/Footer'
import Gallery from './component/Gallery/index.js';
import UserPage from './component/UserPage';
import axios from 'axios';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    currentView: " ",
    imgData:[],
    savedPics: [],
    name: ''

  }
  this.setView = this.setView.bind(this);
  // this.savePics = this.savePics.bind(this);
  this.getPics = this.getPics.bind(this);
  this.callPics = this.callPics.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

//call axios to GET the array of images
// const resp = async axios.get
//call axios to GET one images

//

getPics(pics) {
  this.setState(prevState => {
    return{
      savedPics:[
        ...prevState.savedPics,
       pics
      ]
    }
  })
}

getView(){
  const view = this.state.currentView;
  switch(view){
    case "gallery":
    return <Gallery index = {this.state.imgData}/>;
    case "userPage":
    return <UserPage />;
    default:
    return <Canvas getPics = {this.getPics} />;
  }
}
setView(view){
  this.setState({
    currentView: view
  });
}

// savePics(pics){
//   this.setState({
//     imgData:pics
//   })
// }

async callPics(){
  const call = await axios.get(`/artworks`)
    this.setState({
      imgData:call.data
    })

  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async handleSubmit(e){
    e.preventDefault();
    const create = {
      "name": `${this.state.name}`
      // "password": `${this.state.password}`
    }
    await axios.post(`/users`, create);
  }

  render() {
    return (
      <div className="App">
          <NavBar
          callPics = {this.callPics}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          handleChangeView = {this.setView}
          />
          <hr></hr>
          {this.getView()}
          <Footer />
      </div>
    );
  }
}

export default App;
