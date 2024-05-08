import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(key)
    }
  }, [])
  return (
    <div>
      {count}
    </div>
  )
}

export default App
