import React from 'react'
import { useState } from 'react';

function randomNumber() {
  console.log('run...');
  return Math.trunc(Math.random() * 20)
}


const Clicker = () => {
  
  function uploadObject() {
    setDate((prev) => {
      return{
        ...prev,
        text : 'New Text'
      }
    })
  }
    const [state,setState] = useState(randomNumber())
    const [date,setDate] = useState({
      text : 'Number',
      date : Date.now()
    })


  return (
    <div>
      <h2>Counter : {state}</h2>
      <button onClick={() => setState(state + 1)}>increment</button>
      <button onClick={() => setState(state - 1)}>decrement</button>
      <button onClick={uploadObject}>Upload</button>
      <p>{JSON.stringify(date)}</p>
    </div>
  )
}

export default Clicker
