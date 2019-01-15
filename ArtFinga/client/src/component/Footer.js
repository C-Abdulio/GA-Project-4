import React from 'react';
import twitter  from '../resource/Twitter.png';
import github from '../resource/github.png';
import deviantArt from '../resource/deviantArt.png';
import instagram from '../resource/instagram.png'

export default function Footer(){
  return(
    <footer>
      <p>© Carlos Abdu</p>
      <div className = "social">
        <a href='https://www.twitter.com/DaGr8_Carlos'><img className = "socialImg" src = {twitter} alt="twitter"/></a>
        <a href="https://www.github.com/c-abdulio"><img className = "socialImg" src = {github} alt="github"/></a>
        <a href='https://www.deviantart.com/c-abdulio'><img className = "socialImg" src = {deviantArt} alt="deviantArt"/></a>
        <a href='https://www.instagram.com/carloscontrarian/'><img className = "socialImg" src = {instagram} alt="instagram"/></a>
      </div>
    </footer>
  )
}
