import React, { useContext } from 'react'
import { SomeContext } from '../../App'

function LevelTwoComponent() {


    // hook use context (specify the context)
    // that will return what ever you have provided as value
    const {someData, setSomeData} = useContext(SomeContext) // {someData, setSomeData}

  return (
    <div className='border border-2 border-warning m-2 rounded-2 p-2'>
        <h5>Level Two Component - I need to access the state from App.jsx</h5>
        <h5>{someData}</h5>
        <button onClick ={() => {setSomeData(prev => prev + 1)}} className='btn btn-primary'>Increment</button>
      
    </div>
  )
}

export default LevelTwoComponent
