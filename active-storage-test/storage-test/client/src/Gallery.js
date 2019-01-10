import React from 'react';

export default function Gallery(props){
  return (
    <div>
      {props.index.map(pic => (
        <div key={pic.id} className="galleryPic">
          <img src={pic.image_url} alt={pic.title}/>
          <h2>{pic.title}</h2>
        </div>
      ))}
    </div>
  )
  // const list = props.index;
  // const pics = list.map(picture =>{
  // props.index.map(pic => {
  //   const url = pic.image;
  //   return(
  //     <div
  //     key= {pic.id}
  //     className = "galleryPic"
  //     >
  //     <img
  //     className = "pic"
  //     alt="image"
  //     src = {`${url}`} />
  //     <h2>{pic.title}</h2>
  //     </div>
  //   )
  // })

}
