import React, { Component } from 'react';

export default class SaveForm extends Component{

  render(props){
    return(
      <div>
        <form
        type="text"
        placeholder="enter username"
        />

        <form type="password" />

        <button onClick = {this.save()}>
        SAVE
        </button>

      </div>
    )
  }
}
