import React, { useEffect, useState } from 'react'
import './popUp.css'

import AutoExpandingTextarea from '../components/expandingArea.jsx'
import Button from '../components/button.jsx'

import { formatDateTime } from '../components/formatDateTime.jsx'

import { useAuth } from '../hooks/autProvider.jsx'

import NotificationManager from './notification.jsx'

export const Popup = ({ onClose, children }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export const EditPostPopup = ({ post, onClose, onSave, onPostsUpdated }) => {
  //Auth del token
  const authToken = useAuth().authToken

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [category, setCategory] = useState(post.category)
  const [tags, setTags] = useState(post.tags)

  const handleDelayedClose = () => {
    setTimeout(onClose, 2000)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updatedPost = {
      title: title,
      content: content,
      category: category,
      tags: tags,
    }

    try {
      const response = await fetch(`http://localhost:5000/post/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(updatedPost),
      })
      const responseData = await response.json()

      if (response.ok) {
        NotificationManager.notify('Post updated successfully!', 'success')
        onSave(updatedPost)
        onPostsUpdated()

        handleDelayedClose()
      } else {
        NotificationManager.notify('The post fail to be updated!', 'error')
        throw new Error('Failed to update post' || responseData.message)
      }
    } catch (error) {
      console.error('Error updating post:', error)
      NotificationManager.notify('Failed to update post! ', 'error')
    }
  }

  return (
    <Popup onClose={onClose}>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Edit Post</h2>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="content">Content</label>
        <AutoExpandingTextarea
          placeholder="Enter your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label htmlFor="tags">Tags</label>
        <input id="tags" type="text" value={tags} onChange={(e) => setTags(e.target.value)} />

        <button type="submit" className="button__popup" onClick={onPostsUpdated}>
          Save Changes
        </button>
      </form>
    </Popup>
  )
}

export const PopupDetail = ({ post: initialPost, onClose, onPostsUpdated }) => {
  const [post, setPost] = useState(initialPost)
  const { user, authToken } = useAuth()

  const [showConfirm, setShowConfirm] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [loading, setLoading] = useState(false)

  const [postData, setPostData] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)

  const displayedTags = post.tags.split(',').map((tag) => tag.trim())
  const formattedUpdateAt = formatDateTime(post.updated_at)

  const handleUpdate = () => {
    setShowEdit(true)
  }

  //Verificación de rol y usuario
  const actionUser = user.id === post.author_id || user.role === 'Administrador'

  const paragraphs = post.content
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>)

  const fetchPosts = async () => {
    if (initialLoad) setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/posts')
      const data = await response.json()
      if (response.status === 200) {
        setPostData(data.data)
        setIsEmpty(data.data.length === 0)
      } else {
        console.error('Failed to fetch posts:', data.message)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      if (initialLoad) {
        setLoading(false)
        setInitialLoad(false)
      }
    }
  }

  const handleDeletePost = async () => {
    if (actionUser) {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:5000/post/${post.id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        const data = await response.json()
        if (response.ok) {
          NotificationManager.notify('Post deleted successfully!', 'success')
          console.log('Post deleted successfully:', data)
          onClose() // Cierra el popup después de borrar
          onPostsUpdated()
        } else {
          NotificationManager.notify('The post fail to be deleted!', 'error')
          throw new Error(data.message || 'Failed to delete post')
        }
      } catch (error) {
        console.error('Error deleting post:', error)
        NotificationManager.notify('Failed to delete post: ' + error.message, 'error')
      }
      setShowConfirm(false) // Cierra el diálogo de confirmación
    } else {
      NotificationManager.notify('You do not have permission to delete this post.', 'error')
    }
  }

  const handleSaveChanges = (updatedPost) => {
    console.log('Updated post', updatedPost)
    setPost(updatedPost)
    onClose() // Cierra el popup de edición
  }

  return (
    <div className="popup">
      <div className="popup__inner__post">
        <button onClick={onClose} className="close-btn">
          X
        </button>
        <div className="popup-actions">
          {actionUser && (
            <div className="buttons__action">
              <Button text="Update Post" onClick={handleUpdate} />
              <Button text="Delete Post" onClick={() => setShowConfirm(true)} />
            </div>
          )}
        </div>
        <div className="popup-content">
          <h1>{post.title}</h1>

          <div className="popup__body">
            <div className="popup__1">{paragraphs}</div>

            <div className="popup__2">
              <div>
                <strong>Author:</strong> {post.author_name}
              </div>
              <div>
                <strong>Category:</strong> {post.category}
              </div>
              <div>
                <strong className="tags">Tags:</strong>
                <div className="tags-container">
                  {displayedTags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <strong>Last Updated:</strong> {formattedUpdateAt}
              </div>
            </div>
          </div>
        </div>
        {showConfirm && (
          <div className="confirmation-popup">
            <p>Are you sure you want to delete this post?</p>
            <div className="buttons__action">
              <button onClick={handleDeletePost} className="button__popup" disabled={loading}>
                Yes
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="button__popup"
                disabled={loading}
              >
                No!
              </button>
            </div>
          </div>
        )}

        {showEdit && (
          <EditPostPopup
            post={post}
            onClose={onClose}
            onSave={handleSaveChanges}
            onPostsUpdated={fetchPosts}
          />
        )}
      </div>
    </div>
  )
}
