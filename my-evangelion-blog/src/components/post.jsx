import './post.css'

const Post = ({ title, content, last_update, author_name, category, tags }) => {
  // Limita el contenido a 20 palabras
  const truncatedContent = truncateText(content, 20)

  // Divide las tags y toma solo las primeras tres
  const displayedTags = tags.split(', ').slice(0, 3)

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
            {last_update}
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

export default Post
