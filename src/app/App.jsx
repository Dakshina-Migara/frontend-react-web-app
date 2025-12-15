import { useState } from 'react'
import './App.css'
import Imgnav from '../common/component/Imgnav/Imgnav'
import ButtonNav from '../common/component/ButtonNav/buttonNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Imgnav />
      <ButtonNav/>
    </>
  )
}

export default App