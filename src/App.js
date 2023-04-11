import React, { useState, useEffect } from 'react'

const App = () => {

  const [user, setUser] = useState('users')
  const [data,setData] = useState([])
  const [position,setPosition] = useState({
    x : 0,
    y : 0
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${user}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [user])

  useEffect(() => {
    window.addEventListener('mousemove' , (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      },[])
    })
  })

  return (
    <div>
      <p>User : {user} </p>
      <button onClick={() => setUser('users')}>Web Developer</button>
      <button onClick={() => setUser('posts')}>Android Developer</button>
      <button onClick={() => setUser('todos')}>Ios Developer</button>
      <p>{JSON.stringify(position)}</p>
    </div>
  )
}

export default App
