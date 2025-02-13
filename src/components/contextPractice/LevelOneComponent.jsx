import React from 'react'
import LevelTwoComponent from './LevelTwoComponent'

function LevelOneComponent() {
  return (
    <div className='border border-2 border-primary m-2 rounded-2 p-2'>
        <h5>Level One Component</h5>
        <LevelTwoComponent />
    </div>
  )
}

export default LevelOneComponent
