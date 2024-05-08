import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { RiUser3Fill, RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { useAuth } from '../hooks/autProvider.jsx'

import NotificationManager from '../components/notification.jsx'

import './loginRegister.css'

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { login } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const { username, password } = data
    const response = await fetch('https://the-evangelion-api.vercel.app/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password_md5: password }),
    })
    const responseData = await response.json()
    if (response.status === 200) {
      NotificationManager.notify('Login successful!', 'success')
      localStorage.setItem('token', responseData.token)
      login(responseData.token, {
        username: responseData.username,
        role: responseData.role,
        id: responseData.id,
      })
      navigate('/blog')
    } else {
      NotificationManager.notify('The user or the password is incorrect!', 'error')
    }
  }

  return (
    <div className="login__page">
      <div className="login">
        <img src="https://i.postimg.cc/SKddTPsd/image-2024-05-07-175107231.png" alt="top" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Welcome again!</h1>
          <h2>Please, login</h2>
          <div className="input__box">
            <input
              type="text"
              placeholder="Username"
              {...register('username', { required: 'Username is required' })}
            />
            <RiUser3Fill className="icon" />
          </div>
          {errors.username && NotificationManager.notify(errors.username.message, 'error')}
          <div className="input__box">
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
            />
            <RiLockPasswordFill className="icon" />
          </div>
          {errors.password && NotificationManager.notify(errors.password.message, 'error')}
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const { username, email, password } = data
    const response = await fetch('https://the-evangelion-api.vercel.app/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password_md5: password }),
    })
    const responseData = await response.json()
    if (response.status === 200) {
      NotificationManager.notify('Registration successful! Redirecting to login...', 'success')
      setTimeout(() => navigate('/login'), 2000)
    } else {
      NotificationManager.notify(
        responseData.message || 'The user or the email is already used!',
        'error',
        'error',
      )
    }
  }

  return (
    <div className="login__page">
      <div className="login">
        <img src="https://i.postimg.cc/SKddTPsd/image-2024-05-07-175107231.png" alt="top" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Nice to see you!</h1>
          <h2>Please, register</h2>
          <div className="input__box">
            <input
              type="text"
              placeholder="Username"
              {...register('username', { required: 'Username is required' })}
            />
            <RiUser3Fill className="icon" />
          </div>
          {errors.username && NotificationManager.notify(errors.username.message, 'error')}
          <div className="input__box">
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
            />
            <MdEmail className="icon" />
          </div>
          {errors.email && NotificationManager.notify(errors.email.message, 'error')}
          <div className="input__box">
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
            />
            <RiLockPasswordFill className="icon" />
          </div>
          {errors.password && NotificationManager.notify(errors.password.message, 'error')}
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
