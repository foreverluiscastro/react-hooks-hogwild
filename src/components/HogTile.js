import React, { useState } from 'react'

function HogTile({ hog }) {
  const { name, specialty, greased, weight, image} = hog

  const [showInfo, setShowInfo] = useState(false)

  const info = ( showInfo ? 
    <>
    <p>{specialty}</p>
    <p>{weight}</p>
    <p>{greased}</p>
    <p>{hog["highest medal achieved"]}</p>
    </>
    : null)

    function handleShowInfo() {
      setShowInfo(!showInfo)
    }

  return (
    <div className='pigTile minPigTile maxPigTile' onClick={handleShowInfo}>
      <h3>{name}</h3>
      <img src={image} alt="pigTile"/>
      {info}
    </div>
  )
}

export default HogTile