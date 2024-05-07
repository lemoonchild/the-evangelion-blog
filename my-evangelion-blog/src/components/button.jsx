import React from 'react'
import './button.css'

import PropTypes from 'prop-types'

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

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
