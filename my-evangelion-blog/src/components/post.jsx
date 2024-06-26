import React from 'react'
import { formatDateTime } from '../components/formatDateTime.jsx'
import PropTypes from 'prop-types'

import './post.css'

const Post = ({ title, content, updated_at, author_name, category, tags }) => {
  // Limita el contenido a 20 palabras
  const truncatedContent = truncateText(content, 20)

  // Divide las tags y toma solo las primeras tres
  const displayedTags = tags.split(',').slice(0, 3)

  const formattedUpdateAt = formatDateTime(updated_at)

  return (
    <div className="post">
      <div className="post-title-container">
        <h2 className="post-title">{title}</h2>
      </div>
      <div className="post-body">
        <div className="post1">
          <div className="post-content">{truncatedContent}</div>
          <div className="post-last-update">
            <span>Last Updated: </span>
            {formattedUpdateAt}
          </div>
        </div>
        <div className="post2">
          <div className="post-author">
            <span>Written by: </span>
            {author_name}
          </div>
          <div className="post-category">
            <span>Category: </span>
            {category}
          </div>
          <div className="post-tags">
            <span>Tags: </span>
            {displayedTags.map((tag, index) => (
              <p key={index} className="tag">
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const truncateText = (text, maxWords) => {
  const words = text.split(' ')
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...'
  }
  return text
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  author_name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired
}

export default Post
