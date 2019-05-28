import React from 'react'

export default function Image({ imageSrc, width, height }) {
  const image = imageSrc;
  let backgroundImage;
  if (image) {
    backgroundImage = {
      backgroundImage: `url(${imageSrc}`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: `${width}px`,
      height: `${height}px`,
    }
  }
  else {
    backgroundImage = {
      background: 'whitesmoke'
    }
  }
  return (
    <>
      <div style={backgroundImage}></div>
    </>
  )
}
