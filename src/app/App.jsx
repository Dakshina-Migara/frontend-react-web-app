import { useState } from 'react'
import './App.css'
import Imgnav from '../common/component/Imgnav/Imgnav'
import ButtonNav from '../common/component/ButtonNav/buttonNav'
import Footer from '../common/component/Footer/Footer'
import ProcessBar from '../common/component/ProcessBar/ProcessBar'
import TextArea from '../common/component/TextArea/TextArea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Imgnav />
      <ButtonNav />
      <Footer />
      <ProcessBar />
      <TextArea/>
    </>
  )
}

export default App