import React, { useState } from 'react'
import './popUp.css'

import AutoExpandingTextarea from '../components/expandingArea.jsx'
import Button from '../components/button.jsx'

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

export const EditPostPopup = ({ post, onClose, onSave }) => {
  // Estados para cada propiedad editable del post
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [category, setCategory] = useState(post.category)
  const [tags, setTags] = useState(post.tags)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Lógica para guardar los cambios, puede involucrar llamar a una API
    onSave({ id: post.id, title, content, category, tags })
    onClose() // Cierra el popup después de guardar
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

        <button type="submit" className="button__popup">
          Save Changes
        </button>
      </form>
    </Popup>
  )
}

export const PopupDetail = ({ post, onClose }) => {
  const [showConfirm, setShowConfirm] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  const displayedTags = post.tags.split(', ').map((tag) => tag.trim())

  const handleUpdate = () => {
    setShowEdit(true)
  }

  const paragraphs = post.content
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>)

  const handleDelete = () => {
    console.log('Delete post', post.id)
    setShowConfirm(false) // Cierra el diálogo de confirmación después de confirmar
    onClose() // Cierra el popup del post
  }

  const handleSaveChanges = (updatedPost) => {
    console.log('Updated post', updatedPost)
    // Aquí agregarías la lógica para actualizar el post en el estado o en la base de datos
    setShowEdit(false)
  }

  return (
    <div className="popup">
      <div className="popup__inner__post">
        <button onClick={onClose} className="close-btn">
          X
        </button>
        <div className="popup-actions">
          <div className="buttons__action">
            <Button text="Update Post" onClick={handleUpdate} />
            <Button text="Delete Post" onClick={() => setShowConfirm(true)} />
          </div>
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
                <strong>Last Updated:</strong> {post.last_update}
              </div>
            </div>
          </div>
        </div>
        {showConfirm && (
          <div className="confirmation-popup">
            <p>Are you sure you want to delete this post?</p>
            <div className="buttons__action">
              <button onClick={handleDelete} className="button__popup">
                Yes!
              </button>
              <button onClick={() => setShowConfirm(false)} className="button__popup">
                No!
              </button>
            </div>
          </div>
        )}

        {showEdit && (
          <EditPostPopup
            post={post}
            onClose={() => setShowEdit(false)}
            onSave={handleSaveChanges}
          />
        )}
      </div>
    </div>
  )
}
