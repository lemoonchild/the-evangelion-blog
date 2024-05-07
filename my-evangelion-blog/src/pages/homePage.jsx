import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './homePage.css'
import MyCalendar from '../components/calendar.jsx'
import GifSlider from '../components/gifSlider.jsx'
import RandomStuffSlider from '../components/randomStuffSlider.jsx'

import { Home, About, Posts } from '../pages/centerPages.jsx'

import { useAuth } from '../hooks/autProvider.jsx'

const Blog = () => {
  const navigate = useNavigate()

  const { user, logout, authToken } = useAuth()
  const username = user ? user.username : 'Rei Guest'
  const role = user ? user.role : 'EVA-01 PILOT'

  const [activeTab, setActiveTab] = useState('home')

  const handleNavClick = (tab) => {
    setActiveTab(tab)
  }

  const handleLogout = () => {
    if (authToken) {
      logout()
      navigate('/blog')
    } else {
      navigate('/login')
    }
  }

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
            <p onClick={authToken ? handleLogout : () => navigate('/login')}>
              {authToken ? 'Logout' : 'Login'}
            </p>
          </div>
        </div>

        <div className="main">
          <div className="left">
            <div className="nav">
              <div className="title__bar">
                <h1>nav</h1>
              </div>
              <div className="nav__elements">
                <p className="element" onClick={() => handleNavClick('home')}>
                  <span className="icon__home"></span> home
                </p>
                <p className="element" onClick={() => handleNavClick('posts')}>
                  <span className="icon__posts"></span>posts
                </p>
                <p className="element" onClick={() => handleNavClick('about')}>
                  <span className="icon__me"></span>about me!
                </p>
              </div>
            </div>
            <GifSlider />
            <div className="bio">
              <div className="title__bar">
                <h1>bio</h1>
              </div>

              <div className="elements">
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
              <div className="title__bar">
                <h1>calendar</h1>
              </div>
              <MyCalendar className="calendar__blog" />
            </div>
            <img
              src="https://media.tenor.com/kKCY4vdS6s0AAAAi/evangelion-eva01.gif"
              alt="rei"
              className="rei"
            />
          </div>

          <div className="center">
            {activeTab === 'home' && <Home />}
            {activeTab === 'about' && <About />}
            {activeTab === 'posts' && <Posts />}
          </div>

          <div className="right">
            <div className="status">
              <div className="title__bar">
                <h1>status</h1>
              </div>

              <div className="info">
                <span>♡ 02/05/2024:</span> <p>thinking about my cat</p>
                <span>♡ 02/05/2024:</span> <p>hate traffic</p>
                <span>♡ 02/05/2024:</span> <p>feels like saturday</p>
                <span>♡ 02/05/2024:</span> <p>this blog is killing me</p>
                <span>♡ 03/05/2024:</span> <p>want to play dmc5</p>
                <span>♡ 03/05/2024:</span> <p>in my bf house</p>
                <span>♡ 03/05/2024:</span> <p>i hate virtual classes</p>
              </div>
            </div>

            <RandomStuffSlider />
            <div className="find__me">
              <div className="title__bar">
                <h1>my socials!</h1>
              </div>

              <div className="nav__elements">
                <p className="element">
                  <span className="icon__steam"></span>
                  <a href="https://steamcommunity.com/profiles/76561199202483759/">steam!</a>
                </p>
                <p className="element">
                  <span className="icon__github"></span>
                  <a href="https://github.com/lemoonchild">github!</a>
                </p>
                <p className="element">
                  <span className="icon__twitter"></span>
                  <a href="https://twitter.com/lemoonchildd">twitter!</a>
                </p>
                <p className="element">
                  <span className="icon__insta"></span>
                  <a href="https://www.instagram.com/limoonchildd/?hl=es">instagram!</a>
                </p>
              </div>
            </div>

            <div className="my__cat">
              <div className="title__bar">
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
      </div>
    </div>
  )
}

const BlogMain = ({ action }) => {
  return <div>{action === 'blog' && <Blog />}</div>
}

export default BlogMain
