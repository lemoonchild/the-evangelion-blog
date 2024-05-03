import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginRegistro from './pages/loginRegister'
import BlogMain from './pages/homePage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginRegistro action="login" />} />
        <Route path="/register" element={<LoginRegistro action="register" />} />
        <Route path="/blog" element={<BlogMain action="blog" />} />
      </Routes>
    </Router>
  )
}

export default App
