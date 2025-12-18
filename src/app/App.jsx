import { useState } from 'react'
import './App.css'
import HomePage from '../page/HomePage/HomePage.jsx'
import ExamplePage from '../page/ExamplePage/ExamplePage.jsx'
import MyDetailFirst from '../page/MyDetailFirst/MyDetailFirst.jsx'
import MyDetailSecond from '../page/MyDetailSecond/MyDetailSecond.jsx'
import MyDetailThird from '../page/MyDetailThird/MyDetailThird'
import MyGoals from '../page/MyGoals/MyGoals.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HomePage />
      <ExamplePage />
      <MyDetailFirst />
      <MyDetailSecond />
      <MyDetailThird /> */}
      <MyGoals />
    </>
  )
}

export default App