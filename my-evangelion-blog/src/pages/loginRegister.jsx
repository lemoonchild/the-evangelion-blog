import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { RiUser3Fill } from 'react-icons/ri'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import './loginRegister.css'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password_md5, setPassword] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password_md5 }),
    })
    const data = await response.json()
    if (response.status === 200) {
      localStorage.setItem('token', data.token)
      console.log(successMessage)
      navigate('/blog')
    } else {
      alert(data.message)
    }
  }

  return (
    <div className="login__page">
      <div className="login">
        <img src="../images/logo.png" alt="top" />
        <form onSubmit={handleLogin}>
          <h1>Welcome again!</h1>
          <h2>Please, login</h2>
          <div className="input__box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <RiUser3Fill className="icon" />
          </div>
          <div className="input__box">
            <input
              type="password"
              placeholder="Password"
              value={password_md5}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <RiLockPasswordFill className="icon" />
          </div>

          <button type="submit">Login!</button>

          <div className="register__link">
            <p onClick={() => navigate('/register')}>Don't have an account? Register here!</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export const Register = () => {
  const [username, setUsername] = useState('')
  const [password_md5, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const navigate = useNavigate()

  const handleRegister = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password_md5 }),
    })
    const data = await response.json()
    if (response.status === 201) {
      setTimeout(() => {
        navigate('/login') // Redirige al login después del registro exitoso.
      }, 3000)
    } else {
      alert(data.message)
    }
  }

  return (
    <div className="login__page">
      <div className="login">
        <img src="../images/logo.png" alt="top" />
        <form onSubmit={handleRegister}>
          <h1>Nice to see you!</h1>
          <h2>Please, register</h2>
          <div className="input__box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <RiUser3Fill className="icon" />
          </div>
          <div className="input__box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MdEmail className="icon" />
          </div>
          <div className="input__box">
            <input
              type="password"
              placeholder="Password"
              value={password_md5}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <RiLockPasswordFill className="icon" />
          </div>
          <div className="remember__me">
            <label>
              <input type="checkbox" required /> I agree with the terms and conditions
            </label>
          </div>
          <button type="submit">Register!</button>

          <div className="register__link">
            <p onClick={() => navigate('/login')}>Already have an account? Login here!</p>
          </div>
        </form>
      </div>
    </div>
  )
}
