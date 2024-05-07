import React, { useState, useEffect } from 'react'
import '../components/randomStuffSlider.css'

const RandomStuffSlider = () => {
  const initialImages = [
    {
      src: 'https://y2k.neocities.org/blinkiez/tumblr_inline_pbix8g9cXs1tehlgd_500.gif',
      alt: 'cats'
    },
    { src: 'https://y2k.neocities.org/blinkiez/collect.gif', alt: 'raindow' },
    { src: 'https://y2k.neocities.org/blinkiez/h722.gif', alt: 'ghosts' },
    { src: 'https://vilgacx.github.io/88x31/gifs/discordserver.gif', alt: 'discordserver' },
    {
      src: 'https://y2k.neocities.org/blinkiez/tumblr_inline_pcjgfyAVPM1vss73l_1280.gif',
      alt: 'cat'
    },
    { src: 'https://y2k.neocities.org/blinkiez/tumblr_p011es475W1w5gvx6o2_250.gif', alt: 'hot' },
    { src: 'https://y2k.neocities.org/blinkiez/tumblr_ovh60hHcNA1wugl5wo2_250.gif', alt: 'chill' },
    { src: 'https://anlucas.neocities.org/coffeecup.gif', alt: 'coffee' },
    { src: 'https://anlucas.neocities.org/budgie.gif', alt: 'bird' },
    { src: 'https://anlucas.neocities.org/yahoo2.gif', alt: 'yahoo!' },
    { src: 'https://anlucas.neocities.org/windows_3_1_no.gif', alt: 'windows' },
    { src: 'https://anlucas.neocities.org/msie2.gif', alt: 'msie' },
    { src: 'https://anlucas.neocities.org/matthew_now.gif', alt: 'now' },
    { src: 'https://anlucas.neocities.org/internet-roadkill.gif', alt: 'cow' }
  ]

  const [images, setImages] = useState(initialImages)

  useEffect(() => {
    setImages((images) => [...images, ...images])
  }, [])

  return (
    <div className="image-slider">
      <ul className="slider-conveyor">
        {images.map((img, index) => (
          <li key={index}>
            <img src={img.src} alt={img.alt} className="slide-image" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RandomStuffSlider
