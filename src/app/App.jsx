import { useState } from 'react'
import './App.css'
import HomePage from '../page/HomePage/HomePage.jsx'
import ExamplePage from '../page/ExamplePage/ExamplePage.jsx'
import MyDetailFirst from '../page/MyDetailFirst/MyDetailFirst.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HomePage /> 
      <ExamplePage/> */}
      <MyDetailFirst />
    </>
  )
}

export default App