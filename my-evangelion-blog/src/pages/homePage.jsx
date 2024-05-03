import React from 'react'
import { Link } from 'react-router-dom'
import './homePage.css'
import MyCalendar from '../components/calendar.jsx'
import GifSlider from '../components/gifSlider.jsx'
import RandomStuffSlider from '../components/randomStuffSlider.jsx'

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
            <span>Usuario:</span> {username}
            <p>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                target="_blank"
                rel="noopener noreferrer"
              >
                help!
              </a>
            </p>
            <p>
              <Link to="/login">logout</Link>
            </p>
          </div>
        </div>

        <div className="main">
          <div className="left">
            <div className="nav">
              <div className="title__left__bar">
                <h1>nav</h1>
              </div>

              <div className="nav__elements">
                <p className="element">
                  <Link to="/login">
                    <span className="icon__home"></span> home
                  </Link>
                </p>
                <p className="element">
                  <Link to="/login">
                    <span className="icon__posts"></span>posts
                  </Link>
                </p>
                <p className="element">
                  <Link to="/login">
                    <span className="icon__me"></span>about me!
                  </Link>
                </p>
              </div>
            </div>
            <GifSlider />
            <div className="bio">
              <div className="title__left__bar">
                <h1>bio</h1>
              </div>

              <div className="nav__elements">
                <p>
                  <span className="icon__star"> </span>learn more about me:
                </p>

                <div className="info">
                  <span>♡ name:</span> <p>lemoonchildd</p>
                  <span>♡ age:</span> <p>19</p>
                  <span>♡ favorite things:</span> <p>my cat and my bf</p>
                  <span>♡ carreer:</span> <p>software</p>
                </div>
              </div>
            </div>

            <div className="calendar">
              <div className="title__left__bar">
                <h1>calendar</h1>
              </div>
              <MyCalendar className="calendar__blog" />
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
                <h1>status</h1>
              </div>

              <div className="info">
                <span>♡ 02/05/2024:</span> <p>thinking about my cat</p>
                <span>♡ 02/05/2024:</span> <p>hate traffic</p>
                <span>♡ 02/05/2024:</span> <p>feels like saturday</p>
                <span>♡ 02/05/2024:</span> <p>this blog is killing me</p>
              </div>
            </div>

            <RandomStuffSlider />
            <div className="bio">
              <div className="title__left__bar">
                <h1>to-do list</h1>
              </div>

              <div className="nav__elements">
                <p>Learn more about me</p>
                <p>Hello!</p>
              </div>
            </div>

            <div className="calendar">
              <div className="title__left__bar">
                <h1>my cat</h1>
              </div>
              <img src="../../images/cat.png" alt="cat" className="cat" />
            </div>
            <img
              src="https://media.tenor.com/9WQGZwVRo9EAAAAi/evangelion.gif"
              alt="rei"
              className="rei"
            />
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