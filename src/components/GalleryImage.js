import React from 'react';
export default function GalleryImage({image}) {
  return (
    <div className="gallery-image">
      <div>
        {image ? <img src={image} /> : null}
      </div>
    </div>
  )
}
