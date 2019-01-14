import React from 'react';
import turtle from './turtle.jpeg'
 export default function Gallery(props){

// const museum = props.artData;
// let images = museum.map(image => {
//   const path = image.
// })
   return(
     <div>
        <h2>INSERT GALLERY HERE</h2>
        <div className = "gallery">
        <img className = "galleryPic" src={turtle} alt="art1"/>
        <div>
          {props.index && props.index.map(pic => (
            <div key={pic.id} className="galleryPic">
              <img src={pic.image_url} alt={pic.title}/>
              <h2>{pic.title}</h2>
              {/*<h2>CREATED BY: {this.props.value}</h2>*/}
        </div>
      ))}
    </div>
        </div>
     </div>
   )
 }
