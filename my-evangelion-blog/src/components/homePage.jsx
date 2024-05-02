import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className="blog">
      <div className="header">
        <img src="" alt="" className="eva" />
        <img src="../images/logo.png" alt="" className="logo__evangelion" />
        <h1>Blog!</h1>
        <p>
          <Link to="/login">Help!</Link>
        </p>
        <p>
          <Link to="/login">Logout :c</Link>
        </p>
      </div>

      <div className="main">
        <div className="left">
          <div className="nav">
            <p>
              <Link to="/login">My insta</Link>
            </p>
            <p>
              <Link to="/login">My git</Link>
            </p>
            <p>
              <Link to="/login">My linkedIn</Link>
            </p>
          </div>
          <div className="about__me">
            <p>Hello!</p>
          </div>

          <div className="calendar">
            <p>Ola owo</p>
          </div>
        </div>

        <div className="center">
          <div className="welcome"></div>

          <div className="links"></div>

          <div className="home__page"></div>
        </div>

        <div className="right">
          <div className="bio"></div>
          <div className="random__stuff"></div>

          <div className="recommendations"></div>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  )
}

const BlogMain = ({ action }) => {
  return <div>{action === 'blog' && <Blog />}</div>
}

export default BlogMain
