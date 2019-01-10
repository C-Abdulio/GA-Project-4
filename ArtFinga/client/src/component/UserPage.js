import React, { Component } from 'react';
import Gallery from './Gallery/index.js';

export default class UserPage extends Component{
  render(){
    return(
      <div>
        <h1>Username:</h1>
        <h3>Created these works</h3>
        <Gallery />

      </div>
    )

  }
}
