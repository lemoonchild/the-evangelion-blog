import React, { useState } from 'react'
import './centerPages.css'
import Marquee from '../components/marquee.jsx'
import Post from '../components/post.jsx'
import Button from '../components/button.jsx'
import { Popup, PopupDetail } from '../components/popUp.jsx'
import AutoExpandingTextarea from '../components/expandingArea.jsx'

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
          <div className="content-section">
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
          <div className="content-section">
            <div className="content-item">
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

            <div className="content-item">
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
            <div className="content-item">
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
            <div className="content-item">
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
  const postData = [
    {
      title: 'The Relevance of Evangelion in Modern Media',
      content:
        'More than two decades later, Evangelion continues to influence modern media with its innovative storytelling and exploration of complex themes.',
      last_update: '2024-05-03',
      author_id: 1,
      author_name: 'AsukaFan',
      category: 'Cultural Impact',
      tags: 'innovation, storytelling, anime',
    },
    {
      title: 'The Relevance of Evangelion in Modern Media',
      content:
        'More than two decades later, Evangelion continues to influence modern media with its innovative storytelling and exploration of complex themes.',
      last_update: '2024-05-03',
      author_id: 1,
      author_name: 'AsukaFan',
      category: 'Cultural Impact',
      tags: 'innovation, storytelling, anime',
    },
    {
      title: 'Character Depth in Evangelion: Analyzing Shinji',
      content:
        'Shinji Ikari, the protagonist of Neon Genesis Evangelion, is a complex character who embodies the struggles of identity and responsibility. Through the course of the series, viewers witness his psychological battles and growth amidst the apocalyptic backdrop. His interactions with other characters, such as Rei, Asuka, and Misato, further reveal layers of his personality and the themes of existentialism and loneliness that permeate the show.',
      last_update: '2024-05-03',
      author_id: 2,
      author_name: 'ReiLover',
      category: 'Character Analysis',
      tags: 'Shinji, psychological analysis, existentialism, character growth, loneliness, pilot',
    },
    {
      title: 'The Relevance of Evangelion in Modern Media',
      content:
        "More than two decades later, Neon Genesis Evangelion continues to influence modern media with its innovative storytelling and exploration of complex themes. The series initially launched in the mid-1990s and quickly became a cornerstone of anime culture, influencing countless creators and spawning a variety of adaptations and merchandise. Evangelion is not just a show about giant robots fighting monstrous entities; it's a deep psychological exploration of its characters, each struggling with personal traumas and existential crises. This depth is what sets Evangelion apart and makes it resonate with a diverse audience, even years after its initial release.\n\nThe series also delves into philosophical and religious symbolism, adding layers of meaning that invite viewers to interpret and question the narrative and its themes. From existential philosophy to Freudian psychology, Evangelion wraps complex ideas in a narrative that is both accessible and engaging, challenging viewers to reflect on their own lives and beliefs.",
      last_update: '2024-05-03',
      author_id: 1,
      author_name: 'AsukaFan',
      category: 'Cultural Impact',
      tags: 'innovation, storytelling, anime, psychology, philosophy, mecha',
    },
    {
      title: 'The Relevance of Evangelion in Modern Media',
      content:
        "More than two decades later, Neon Genesis Evangelion continues to influence modern media with its innovative storytelling and exploration of complex themes. The series initially launched in the mid-1990s and quickly became a cornerstone of anime culture, influencing countless creators and spawning a variety of adaptations and merchandise. Evangelion is not just a show about giant robots fighting monstrous entities; it's a deep psychological exploration of its characters, each struggling with personal traumas and existential crises. This depth is what sets Evangelion apart and makes it resonate with a diverse audience, even years after its initial release.\n\nThe series also delves into philosophical and religious symbolism, adding layers of meaning that invite viewers to interpret and question the narrative and its themes. From existential philosophy to Freudian psychology, Evangelion wraps complex ideas in a narrative that is both accessible and engaging, challenging viewers to reflect on their own lives and beliefs.",
      last_update: '2024-05-03',
      author_id: 1,
      author_name: 'AsukaFan',
      category: 'Cultural Impact',
      tags: 'innovation, storytelling, anime, psychology, philosophy, mecha',
    },
    {
      title: 'The Relevance of Evangelion in Modern Media',
      content:
        "More than two decades later, Neon Genesis Evangelion continues to influence modern media with its innovative storytelling and exploration of complex themes. The series initially launched in the mid-1990s and quickly became a cornerstone of anime culture, influencing countless creators and spawning a variety of adaptations and merchandise. Evangelion is not just a show about giant robots fighting monstrous entities; it's a deep psychological exploration of its characters, each struggling with personal traumas and existential crises. This depth is what sets Evangelion apart and makes it resonate with a diverse audience, even years after its initial release.\n\nThe series also delves into philosophical and religious symbolism, adding layers of meaning that invite viewers to interpret and question the narrative and its themes. From existential philosophy to Freudian psychology, Evangelion wraps complex ideas in a narrative that is both accessible and engaging, challenging viewers to reflect on their own lives and beliefs.",
      last_update: '2024-05-03',
      author_id: 1,
      author_name: 'AsukaFan',
      category: 'Cultural Impact',
      tags: 'innovation, storytelling, anime, psychology, philosophy, mecha',
    },
    {
      title: 'The Relevance of Evangelion in Modern Media',
      content:
        "More than two decades later, Neon Genesis Evangelion continues to influence modern media with its innovative storytelling and exploration of complex themes. The series initially launched in the mid-1990s and quickly became a cornerstone of anime culture, influencing countless creators and spawning a variety of adaptations and merchandise. Evangelion is not just a show about giant robots fighting monstrous entities; it's a deep psychological exploration of its characters, each struggling with personal traumas and existential crises. This depth is what sets Evangelion apart and makes it resonate with a diverse audience, even years after its initial release.\n\nThe series also delves into philosophical and religious symbolism, adding layers of meaning that invite viewers to interpret and question the narrative and its themes. From existential philosophy to Freudian psychology, Evangelion wraps complex ideas in a narrative that is both accessible and engaging, challenging viewers to reflect on their own lives and beliefs.",
      last_update: '2024-05-03',
      author_id: 1,
      author_name: 'AsukaFan',
      category: 'Cultural Impact',
      tags: 'innovation, storytelling, anime, psychology, philosophy, mecha',
    },
    {
      title: 'The Relevance of Evangelion in Modern Media',
      content:
        "More than two decades later, Neon Genesis Evangelion continues to influence modern media with its innovative storytelling and exploration of complex themes. The series initially launched in the mid-1990s and quickly became a cornerstone of anime culture, influencing countless creators and spawning a variety of adaptations and merchandise. Evangelion is not just a show about giant robots fighting monstrous entities; it's a deep psychological exploration of its characters, each struggling with personal traumas and existential crises. This depth is what sets Evangelion apart and makes it resonate with a diverse audience, even years after its initial release.\n\nThe series also delves into philosophical and religious symbolism, adding layers of meaning that invite viewers to interpret and question the narrative and its themes. From existential philosophy to Freudian psychology, Evangelion wraps complex ideas in a narrative that is both accessible and engaging, challenging viewers to reflect on their own lives and beliefs.",
      last_update: '2024-05-03',
      author_id: 1,
      author_name: 'AsukaFan',
      category: 'Cultural Impact',
      tags: 'innovation, storytelling, anime, psychology, philosophy, mecha',
    },
  ]

  //Para el popUp
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  //Formateo de tags
  const [tags, setTags] = useState('')

  const handleTagsChange = (event) => {
    setTags(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const formattedTags = tags.split(/\s*,\s*/).join(',')
    console.log('Formatted Tags:', formattedTags)
    console.log('Form Submitted!')
    setIsOpen(false) // Cierra el Popup después del envío
    // Aquí `formattedTags` a tu servidor
    // Aquí logica para enviar el form del post
  }

  //Area expansible del contenido
  const [content, setContent] = useState('')

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  //Para los posts
  const [selectedPost, setSelectedPost] = useState(null)

  const openPopup = (post) => {
    setSelectedPost(post)
  }

  const closePopup = () => {
    setSelectedPost(null)
  }

  return (
    <div className="posts">
      <div className="title">
        <h1>Welcome to my posts</h1>
      </div>

      <div className="my__posts">
        <div className="title__bar">
          <h1>My posts of evangelion!</h1>
        </div>
        <div className="info__posts">
          <Button text="Create Post" onClick={togglePopup} />
          {isOpen && (
            <Popup onClose={togglePopup} className="create__post">
              <form className="form" onSubmit={handleFormSubmit}>
                <h2>Create a New Post</h2>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Title" />
                <label htmlFor="title">Content</label>
                <AutoExpandingTextarea
                  placeholder="Enter your content here..."
                  value={content}
                  onChange={handleContentChange}
                />
                <label htmlFor="title">Category</label>
                <input type="text" placeholder="Category" />
                <label htmlFor="title">Tags</label>
                <input
                  type="text"
                  placeholder="Enter tags separated by commas"
                  value={tags}
                  onChange={handleTagsChange}
                />
                <button type="submit" className="button__popup">
                  Create Post
                </button>
              </form>
            </Popup>
          )}
          <div className="content-section">
            <div className="all_posts">
              {postData.map((post, index) => (
                <div key={index} onClick={() => openPopup(post)}>
                  <Post {...post} />
                </div>
              ))}
              {selectedPost && <PopupDetail post={selectedPost} onClose={closePopup} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
