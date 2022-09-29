import React from 'react'
import HogTile from './HogTile'

function HogContainer({ hogs }) {
  // console.log('this is the hogs list inside of HogCont:', hogs)

  const hogsToDisplay = hogs.map((hog) => (
    <HogTile key={hog.name} hog={hog}/>
  ))

  return (
    <div className='ui grid container'>
        <div className='ui eight wide row'>
          { hogsToDisplay }
        </div>
    </div>
  )
}

export default HogContainer