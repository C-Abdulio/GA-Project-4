import React, { Component } from 'react';

export default class SaveForm extends Component{

  render(props){
    return(
      <div>
        <form>

        <input
        type="text"
        placeholder="text"
        onChange={this.props.handleChange}
        />

        <input type="password"
         placeholder="password"
         onChange={this.props.handleChange}
        />

        <button onClick = {this.props.getPics}>
        SAVE
        </button>

        </form>
      </div>
    )
  }
}
