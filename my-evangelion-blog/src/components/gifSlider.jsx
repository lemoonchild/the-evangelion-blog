import React from 'react'
import { useState, useEffect } from 'react'
import '../components/gifSlider.css'

const GifSlider = () => {
  const initialImages = [
    {
      src: 'https://media1.tenor.com/m/rJonJ5PSLG0AAAAC/evangelion-neon-genesis-evangelion.gif',
      alt: 'eva',
    },
    {
      src: 'https://media1.tenor.com/m/1Glmssc3QcsAAAAC/dialuxi-dialuxi3000.gif',
      alt: 'Shinji',
    },
    {
      src: 'https://media1.tenor.com/m/HHsiqGbkmNcAAAAC/neon-genesis-evangelion-evangelion.gif',
      alt: 'reaction',
    },
    {
      src: 'https://media1.tenor.com/m/ksbQKwWCJxgAAAAd/mudae-evangelion.gif',
      alt: 'cry',
    },
    {
      src: 'https://media1.tenor.com/m/Y9E2adq4XdUAAAAC/shinji-evangelion.gif',
      alt: 'dancing',
    },
    {
      src: 'https://media1.tenor.com/m/FgGlem7vDJMAAAAd/evangelion-pubg.gif',
      alt: 'evadancing',
    },
    {
      src: 'https://media1.tenor.com/m/3SJrBPHrsJYAAAAC/shinji.gif',
      alt: 'evadancing',
    },
    {
      src: 'https://media1.tenor.com/m/7RLlLi_p0ocAAAAC/ramiel-neon-genesis-evangelion.gif',
      alt: 'screaming',
    },
    {
      src: 'https://media1.tenor.com/m/v8RahfbOYxcAAAAC/ramiel-evangelion.gif',
      alt: 'love',
    },
  ]

  const [images, setImages] = useState(initialImages)

  useEffect(() => {
    setImages((images) => [...images, ...images])
  }, [])

  return (
    <div className="gif-section">
      <ul className="gif-conveyor">
        {images.map((img, index) => (
          <li key={index}>
            <img src={img.src} alt={img.alt} className="gif" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GifSlider
