import React from 'react'
import './button.css'

const Button = ({ onClick, text }) => {
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ '--char-index': index }} className="char">
        {char}
      </span>
    ))
  }

  return (
    <button onClick={onClick} className="button">
      {splitText(text)}
    </button>
  )
}

export default Button
