import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const AutoExpandingTextarea = ({ placeholder, value, onChange }) => {
  const textareaRef = useRef(null)

  useEffect(() => {
    const textarea = textareaRef.current
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }, [value])

  return (
    <textarea
      ref={textareaRef}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ overflow: 'hidden', resize: 'none' }}
    />
  )
}

export default AutoExpandingTextarea

AutoExpandingTextarea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
