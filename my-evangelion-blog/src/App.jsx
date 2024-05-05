import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Login, Register } from '../src/pages/loginRegister.jsx'
import BlogMain from './pages/homePage'
import { AuthProvider } from '../src/hooks/autProvider.jsx'

import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<BlogMain action="blog" />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
