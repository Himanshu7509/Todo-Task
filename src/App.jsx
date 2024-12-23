import React from 'react'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from './components/Todo/Todo'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Todo/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App