import React, { useState, useEffect, useRef } from 'react'

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
