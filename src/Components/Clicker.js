import React from 'react'
import { useState } from 'react';

const Clicker = () => {

    const [state,setState] = useState(0)

  return (
    <div>
      <h2>Counter : {state}</h2>
      <button onClick={() => setState(state + 1)}>increment</button>
      <button onClick={() => setState(state - 1)}>decrement</button>
    </div>
  )
}

export default Clicker
