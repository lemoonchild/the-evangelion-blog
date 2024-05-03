import React from 'react'
import { Link } from 'react-router-dom'
import { RiUser3Fill } from 'react-icons/ri'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import './loginRegister.css'

const Login = () => {
  return (
    <div className="login__page">
      <div className="login">
        <img src="../images/logo.png" alt="top" />
        <form action="">
          <h1>Welcome again!</h1>
          <h2>Please, login</h2>
          <div className="input__box">
            <input type="text" placeholder="Username" required />
            <RiUser3Fill className="icon" />
          </div>
          <div className="input__box">
            <input type="password" placeholder="Password" required />
            <RiLockPasswordFill className="icon" />
          </div>

          <div className="remember__me">
            <label>
              <input type="checkbox" required /> I agree with the terms and conditions
            </label>
          </div>
          <Link to="/blog">
            <button type="submit">Login!</button>
          </Link>

          <div className="register__link">
            <p>
              Don't have an account? <Link to="/register">Register!</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

const Register = () => {
  return (
    <div className="login__page">
      <div className="login">
        <img src="../images/logo.png" alt="top" />
        <form action="">
          <h1>Nice to see you!</h1>
          <h2>Please, register</h2>
          <div className="input__box">
            <input type="text" placeholder="Username" required />
            <RiUser3Fill className="icon" />
          </div>
          <div className="input__box">
            <input type="email" placeholder="Email" required />
            <MdEmail className="icon" />
          </div>
          <div className="input__box">
            <input type="password" placeholder="Password" required />
            <RiLockPasswordFill className="icon" />
          </div>
          <div className="remember__me">
            <label>
              <input type="checkbox" required /> I agree with the terms and conditions
            </label>
          </div>
          <Link to="/blog">
            <button type="submit">Register!</button>
          </Link>

          <div className="register__link">
            <p>
              Already have an account? <Link to="/login">Login!</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

const LoginRegistro = ({ action }) => {
  return (
    <div>
      {action === 'login' && <Login />}
      {action === 'register' && <Register />}
    </div>
  )
}

export default LoginRegistro
