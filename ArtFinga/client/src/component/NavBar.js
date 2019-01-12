import React from 'react';

export default function NavBar(props){
  return(

    <nav className= "viewNav">
      <h3>ARTFINGAH</h3>
      <div className="navBtns" onClick = {() => props.handleChangeView('create')}>
      <h3>CREATE</h3>
      </div>

      <div className="navBtns" onClick = {() => {
        props.callPics();
        props.handleChangeView('gallery');
      }}>
      <h3>GALLERY</h3>
      </div>

      <div className="navBtns" onClick = {() => props.handleChangeView('userPage')}>
      <h3>LOGIN</h3>
      </div>
      {/*When the user is logged in, switch LOGIN to USERPAGE*/}
    </nav>
  )

}
