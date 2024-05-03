import React from 'react'
import { Link } from 'react-router-dom'
import './homePage.css'
import MyCalendar from '../components/calendar.jsx'

const Blog = () => {
  const username = 'Lemoonchild'
  return (
    <div className="blog">
      <div className="all__blog">
        <img src="../images/logo.png" alt="" className="logo__evangelion" />

        <div className="title__blog">
          <h1>My Evangelion</h1>
          <h2>.blog!</h2>
        </div>
        <img src="../images/eva.png" alt="" className="eva" />

        <div className="header">
          <div className="elements__header">
            <p className="username">
              <span>Usuario:</span> {username}
            </p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help!
              </a>
            </p>

            <p>
              <Link to="/login">Logout</Link>
            </p>
          </div>
        </div>

        <div className="main">
          <div className="left">
            <div className="nav">
              <div className="title__left__bar">
                <h1>Nav</h1>
              </div>

              <div className="nav__elements">
                <p className="element">
                  <Link to="/login">
                    <span className="icon__home"></span> Home
                  </Link>
                </p>
                <p className="element">
                  <Link to="/login">
                    <span className="icon__posts"></span>Posts
                  </Link>
                </p>
                <p className="element">
                  <Link to="/login">
                    <span className="icon__me"></span>About me!
                  </Link>
                </p>
              </div>
            </div>
            <div className="bio">
              <div className="title__left__bar">
                <h1>Bio</h1>
              </div>

              <div className="nav__elements">
                <p>Learn more about me</p>
                <p>Hello!</p>
              </div>
            </div>

            <div className="calendar">
              <div className="title__left__bar">
                <h1>Calendar</h1>
              </div>
              <div className="nav__elements">
                <MyCalendar className="calendar__blog" />
              </div>
            </div>
          </div>

          <div className="center">
            <div className="welcome"></div>

            <div className="links"></div>

            <div className="home__page"></div>
          </div>

          <div className="right">
            <div className="nav">
              <div className="title__left__bar">
                <h1>Nav</h1>
              </div>

              <div className="nav__elements">
                <p className="element">
                  <Link to="/login">
                    <span className="icon__home"></span> Home
                  </Link>
                </p>
                <p className="element">
                  <Link to="/login">
                    <span className="icon__posts"></span>Posts
                  </Link>
                </p>
                <p className="element">
                  <Link to="/login">
                    <span className="icon__me"></span>About me!
                  </Link>
                </p>
              </div>
            </div>
            <div className="bio">
              <div className="title__left__bar">
                <h1>Bio</h1>
              </div>

              <div className="nav__elements">
                <p>Learn more about me</p>
                <p>Hello!</p>
              </div>
            </div>

            <div className="calendar">
              <div className="title__left__bar">
                <h1>Calendar</h1>
              </div>
              <div className="nav__elements">
                <MyCalendar />
              </div>
            </div>
          </div>
        </div>

        <div className="footer"></div>
      </div>
    </div>
  )
}

const BlogMain = ({ action }) => {
  return <div>{action === 'blog' && <Blog />}</div>
}

export default BlogMain
