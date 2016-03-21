import React from 'react';
export default function GalleryThumbs({images, selectImage}) {
  return (
    <div className="image-scroller">
      {images.map((image, index) => (
        <div key={index} onClick={selectImage.bind(this, image)}>
          <img src={image}/>
        </div>
      ))}
    </div>
  )
}