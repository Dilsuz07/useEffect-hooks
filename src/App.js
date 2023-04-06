import React from 'react'
// import Clicker from './Components/Clicker'
import { useEffect ,useRef } from 'react';

const App = () => {

  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    inputRef.current.focus()
  })

  // const [isClicker,setClicker] = useState(false)

  // useEffect(() => {
  //   console.log('render',isClicker)

  //   return () => console.log('hey')

  // },[isClicker])

  return (
    <div>
      <h1>React App</h1>
      {/* <button onClick={() => setClicker(!isClicker)}>Toogle Clicker</button>
      {isClicker && <Clicker />} */}

      <input 
        type='text'
        placeholder='Enter your name'
        ref={inputRef}
      />
      <br />
      <button onClick={handleClick}>Click</button>
      
    </div>
  )
}

export default App
