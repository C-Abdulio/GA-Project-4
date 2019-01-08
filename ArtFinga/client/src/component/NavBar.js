import React from 'react';

export default function NavBar(props){
  return(
    <nav className= "viewNav">
      <div className="navBtns" onClick = {() => props.handleChangeView('create')}>
      <h3>CREATE</h3>
      </div>

      <div className="navBtns" onClick = {() => props.handleChangeView('gallery')}>
      <h3>GALLERY</h3>
      </div>

      <div className="navBtns" onClick = {() => props.handleChangeView('login')}>
      <h3>LOGIN</h3>
      </div>
      {/*When the user is logged in, switch LOGIN to USERPAGE*/}
    </nav>
  )

}
