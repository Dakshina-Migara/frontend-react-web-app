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
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/firstpage" element={<HomePage />} />

        <Route path="/secondpage" element={
          <ProtectedRoute stepRequired={2}>
            <ExamplePage />
          </ProtectedRoute>
        } />

        <Route path="/thirdpage" element={
          <ProtectedRoute stepRequired={3}>
            <MyDetailFirst />
          </ProtectedRoute>
        } />

        <Route path="/fourthpage" element={
          <ProtectedRoute stepRequired={4}>
            <MyDetailSecond />
          </ProtectedRoute>
        } />

        <Route path="/fifthpage" element={
          <ProtectedRoute stepRequired={5}>
            <MyDetailThird />
          </ProtectedRoute>
        } />

        <Route path="/sixpage" element={
          <ProtectedRoute stepRequired={6}>
            <MyGoals />
          </ProtectedRoute>
        } />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App