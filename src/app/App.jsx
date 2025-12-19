import { useState } from 'react'
import './App.css'
import HomePage from '../page/HomePage/HomePage.jsx'
import ExamplePage from '../page/ExamplePage/ExamplePage.jsx'
import MyDetailFirst from '../page/MyDetailFirst/MyDetailFirst.jsx'
import MyDetailSecond from '../page/MyDetailSecond/MyDetailSecond.jsx'
import MyDetailThird from '../page/MyDetailThird/MyDetailThird'
import MyGoals from '../page/MyGoals/MyGoals.jsx'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../common/protected/ProtectedRoute.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='*' element={<HomePage />}></Route>
        <Route path='/firstpage' element={<HomePage />}></Route>
        <Route path='/secondpage' element={<ExamplePage />}></Route>
        <Route path='/thirdpage' element={<MyDetailFirst />}></Route>
        <Route path='/fourthpage' element={<MyDetailSecond />}></Route>
        <Route path='/fifthpage' element={<MyDetailThird />}></Route>
        <Route path='/sixpage' element={<MyGoals />}></Route>
      </Routes>

    </>
  )
}

export default App