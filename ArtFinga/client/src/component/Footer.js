import React from 'react';
import twitter  from '../resource/Twitter.png';
import github from '../resource/github.png';
import deviantArt from '../resource/deviantArt.png';

export default function Footer(){
  return(
    <footer>
      <p>© Carlos Abdu</p>
      <div className = "social">
        <img className = "socialImg" src = {twitter} alt="twitter"/>
        <img className = "socialImg" src = {github} alt="github"/>
        <img className = "socialImg" src = {deviantArt} alt="deviantArt"/>
      </div>
    </footer>
  )
}
