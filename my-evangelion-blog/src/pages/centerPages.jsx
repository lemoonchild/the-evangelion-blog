import React from 'react'
import './centerPages.css'
import Marquee from '../components/marquee.jsx'

export const Home = () => {
  return (
    <div className="home__content">
      <div className="title">
        <h1>welcome to my blog!</h1>
      </div>

      <Marquee text="Anywhere can be paradise as long as you have the will to live. After all, you are alive, so you will always have the chance to be happy ♡" />

      <div className="home">
        <div className="title__bar">
          <h1>Home</h1>
        </div>
        <div className="info__home">
          <img
            src="https://i.pinimg.com/originals/2d/90/c9/2d90c991a4bcc3cebc5f76740fb07371.gif"
            alt="rei"
            className="images__home"
          />
          <div className="home__info">
            <span>Welcome</span>
            <p className="text">
              Welcome to the universe of Neon Genesis Evangelion! From the enigmatic Angels to the
              deep personal battles of its characters, this is your place to delve into its complex
              world. Whether you're a longtime fan or just discovering this iconic series, there's
              something here for everyone.
            </p>
          </div>
          <img
            src="https://i.pinimg.com/originals/cb/21/e0/cb21e0b0349d90ece5f03fda6b37e8f6.gif"
            alt="rei"
            className="images__home"
          />
          <div className="home__info">
            <span>What to expect?</span>
          </div>
          <div class="content-section">
            <p className="content-item">On this blog, you will find:</p>
            <div className="content-item">
              <h3>In-depth Analysis</h3>
              <p>
                We explore each episode, movie, and manga, breaking down themes, symbolism, and
                philosophies.
              </p>
            </div>
            <div className="content-item">
              <h3>Characters</h3>
              <p>
                Detailed profiles of characters, their developments, and the psychological impact of
                their roles.
              </p>
            </div>
            <div className="content-item">
              <h3>Theories and Speculations</h3>
              <p>
                A space to discuss the multiple interpretations and theories surrounding the series.
              </p>
            </div>
            <div className="content-item">
              <h3>News and Updates</h3>
              <p>
                Stay updated with the latest news about Evangelion, including product releases,
                events, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const About = () => {
  return (
    <div className="about__me">
      <div className="title">
        <h1>About me!</h1>
      </div>

      <div className="about">
        <div className="title__bar">
          <h1>More about the developer!</h1>
        </div>
        <div className="info__home">
          <div class="content-section">
            <div class="content-item">
              <img
                src="https://i.pinimg.com/originals/90/67/bb/9067bbe651edc612f5ca1ae581e7513b.gif"
                alt="kaworu"
                className="about__images"
              />
              <h3>Who I Am</h3>
              <p className="text">
                I am a 19-year-old software engineering student known online as lemoonchild. I own a
                cat and love creating websites, though I'm still learning the ropes in the vast
                world of web development.
              </p>
            </div>

            <div class="content-item">
              <img
                src="https://i.pinimg.com/originals/5b/8c/4a/5b8c4a0978f7d60fa90c313cbc860832.gif"
                alt="toji"
                className="about__images"
              />
              <h3>Interests</h3>
              <p className="text">
                My hobbies include playing video games, listening to music, reading manga, watching
                anime, and playing with my cat. I also enjoy walking, eating sushi, and exploring
                new restaurants with my boyfriend.
              </p>
            </div>
            <div class="content-item">
              <img
                src="https://i.pinimg.com/originals/52/7f/64/527f6409ae1738c5e44bed08f3bcd379.gif"
                alt="dante"
                className="about__images"
              />
              <h3>Favorite Characters</h3>
              <p className="text">
                Some of my favorite characters are Rei and Kaworu from Evangelion, Aki from Chainsaw
                Man, Toji and Choso from Jujutsu Kaisen, Seven from Mystic Messenger, all the boys
                from Devil May Cry 5, Berlin from Money Heist, Kageyama and Tsukishima from Haikyuu,
                Dionysus from Hades and Dazai from Bungou Stray Dogs.
              </p>
            </div>
            <div class="content-item">
              <img
                src="https://i.pinimg.com/originals/6b/ad/54/6bad5469b6cf7c398b0148d8583d88dd.gif"
                alt="stray"
                className="about__images"
              />
              <h3>Favorite Games</h3>
              <p className="text">
                I love engaging in a variety of video games. My top picks include League of Legends,
                Devil May Cry 5, Hollow Knight, Stardew Valley, Hades, Slime Rancher, and Stray.
              </p>
              <img
                src="https://i.pinimg.com/originals/b3/67/d5/b367d5c9ab490c8f522e7a69c5b53e4d.gif"
                alt="vergil"
                className="about__images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Posts = () => {
  return (
    <div className="posts">
      <div className="title">
        <h1>Welcome to my posts</h1>
      </div>
      <div className="my__posts">
        <div className="title__bar">
          <h1>About evangelion</h1>
        </div>
      </div>
    </div>
  )
}
