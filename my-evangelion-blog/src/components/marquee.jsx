import React from 'react'
import './marquee.css'
import PropTypes from 'prop-types'

const Marquee = ({ text }) => {
  return (
    <div className="marquee">
      <p>{text}</p>
    </div>
  )
}

Marquee.propTypes = {
  text: PropTypes.string.isRequired
}

export default Marquee
