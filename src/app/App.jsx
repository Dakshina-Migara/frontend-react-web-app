import { useState } from 'react'
import './App.css'
import Imgnav from '../common/component/Imgnav/Imgnav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Imgnav />
    </>
  )
}

export default App