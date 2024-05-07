import React, { useState, useEffect, Suspense, lazy } from 'react'

import Marquee from '../components/marquee.jsx'
import Button from '../components/button.jsx'
import { Popup, PopupDetail } from '../components/popUp.jsx'
import AutoExpandingTextarea from '../components/expandingArea.jsx'

import { useAuth } from '../hooks/autProvider.jsx'
import NotificationManager from '../components/notification.jsx'

import './centerPages.css'

const Post = lazy(() => import('../components/post.jsx'))

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
  const { user, authToken } = useAuth()

  const [isOpen, setIsOpen] = useState(false)
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')
  const [selectedPost, setSelectedPost] = useState(null)
  const [postData, setPostData] = useState([])

  const [loading, setLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [error, setError] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const handleTagsChange = (event) => {
    setTags(event.target.value)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  const openPopup = (post) => {
    setSelectedPost(post)
  }

  const closePopup = () => {
    setSelectedPost(null)
  }

  const fetchPosts = async () => {
    setLoading(true)
    setError(false)
    setIsEmpty(false)
    try {
      const response = await fetch('https://the-evangelion-api.vercel.app/posts')
      const data = await response.json()
      if (response.status === 200) {
        setPostData(data.data)
        setIsEmpty(data.data.length === 0)
      } else {
        ;<p>Failed to fetch posts</p>
        console.error('Failed to fetch posts:', data.message)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const formattedTags = tags
      .split(',')
      .map((tag) => tag.trim())
      .join(',')

    const newPost = {
      title: document.querySelector('input[type="text"][placeholder="Title"]').value,
      content,
      author_id: user.id,
      author_name: user.username,
      category: document.querySelector('input[type="text"][placeholder="Category"]').value,
      tags: formattedTags
    }

    if (!newPost.title || !newPost.content || !newPost.category) {
      NotificationManager.notify('Please fill in all fields!', 'error')
      return
    }

    try {
      const response = await fetch('https://the-evangelion-api.vercel.app/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(newPost)
      })
      const responseData = await response.json()
      console.log(responseData)
      if (response.ok) {
        NotificationManager.notify('Post created successfully!', 'success')
        setIsOpen(false)
      } else {
        NotificationManager.notify('The post failed to be created!', 'error')
      }
    } catch (error) {
      NotificationManager.notify('The post failed to be created!', 'error')
    }
    fetchPosts()
  }

  return (
    <div className="posts">
      <Suspense fallback={<div>Loading posts...</div>}>
        <Marquee text="The fate of destruction is also the joy of rebirth. - Gendo Ikari" />
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
                {loading && (
                  <div>
                    <p className="message">Loading posts...</p>
                    <img
                      src="https://media.tenor.com/HlX_Yi1keVEAAAAi/rei-rei-ayanami.gif"
                      alt="Loading"
                    />
                  </div>
                )}
                {!loading && error && (
                  <div>
                    <p className="message">Error loading posts. Please try again later.</p>
                    <img
                      src="https://i.pinimg.com/736x/f9/b5/e5/f9b5e5fcfac30d1a19271972a746a6f4.jpg"
                      alt="Error"
                    />
                  </div>
                )}
                {!loading && !error && !isEmpty && postData.length === 0 && (
                  <div>
                    <p className="message">No posts available, sorry!</p>
                    <img
                      src="https://i.pinimg.com/564x/b5/cb/e5/b5cbe59d332134afef989cbeec16efd5.jpg"
                      alt="No Posts"
                    />
                  </div>
                )}
                {!loading &&
                  !error &&
                  postData.map((post, index) => (
                    <div key={index} onClick={() => openPopup(post)}>
                      <Post {...post} />
                    </div>
                  ))}
                {selectedPost && (
                  <PopupDetail
                    post={selectedPost}
                    onClose={closePopup}
                    onPostsUpdated={fetchPosts}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  )
}
