import { useState } from 'react'
import './App.css'
import Imgnav from '../common/component/Imgnav/Imgnav'
import ButtonNav from '../common/component/ButtonNav/buttonNav'
import Footer from '../common/component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Imgnav />
      <ButtonNav />
      <Footer />
    </>
  )
}

export default App