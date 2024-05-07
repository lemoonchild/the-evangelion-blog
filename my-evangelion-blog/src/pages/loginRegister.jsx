import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RiUser3Fill } from 'react-icons/ri'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'

import { useAuth } from '../hooks/autProvider.jsx'

import NotificationManager from '../components/notification.jsx'

import './loginRegister.css'

export const Login = () => {
  const { login } = useAuth()

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
      NotificationManager.notify('Login successful!', 'success')

      localStorage.setItem('token', data.token)
      login(data.token, { username: data.username, role: data.role, id: data.id })
      console.log(successMessage)
      navigate('/blog')
    } else {
      NotificationManager.notify('The user or the password is incorrect!', 'error')
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
            <h3>Don't have an account?</h3>
            <p onClick={() => navigate('/register')}>Register here!</p>
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
    if (response.status === 200) {
      NotificationManager.notify('Registration successful! Redirecting to login...', 'success')
      setSuccessMessage('Registration successful! Redirecting to login...')
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } else {
      NotificationManager.notify('The user or the email is already used!', 'error')
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
            <h3>Already have an account?</h3>
            <p onClick={() => navigate('/login')}>Login here!</p>
          </div>
        </form>
      </div>
    </div>
  )
}
