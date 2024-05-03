import React, { useState, useEffect } from 'react'
import '../components/randomStuffSlider.css'

const RandomStuffSlider = () => {
  const initialImages = [
    { src: 'https://vilgacx.github.io/88x31/gifs/imissxp.gif', alt: 'imissxp' },
    { src: 'https://vilgacx.github.io/88x31/gifs/got_html.gif', alt: 'got_html' },
    { src: 'https://vilgacx.github.io/88x31/gifs/lol.gif', alt: 'lol' },
    { src: 'https://vilgacx.github.io/88x31/gifs/discordserver.gif', alt: 'discordserver' },
    { src: 'https://vilgacx.github.io/88x31/gifs/penguins.gif', alt: 'penguins' },
    { src: 'https://vilgacx.github.io/88x31/gifs/firefoxnow.gif', alt: 'firefoxnow' },
    { src: 'https://cyber.dabamos.de/88x31/amazing_free_stuff.gif', alt: 'amazing_free_stuff' },
    { src: 'https://cyber.dabamos.de/88x31/blink-0.gif', alt: 'blink-0' },
    { src: 'https://cyber.dabamos.de/88x31/cc-by-sa.gif', alt: 'cc-by-sa' },
    { src: 'https://cyber.dabamos.de/88x31/corp.gif', alt: 'corp' },
    { src: 'https://cyber.dabamos.de/88x31/copy_floppy.gif', alt: 'copy_floppy' },
    { src: 'https://cyber.dabamos.de/88x31/a2600now.gif', alt: 'a2600now' },
    { src: 'https://cyber.dabamos.de/88x31/e-scp.gif', alt: 'e-scp' },
    { src: 'https://cyber.dabamos.de/88x31/iebarf.gif', alt: 'iebarf' },
    { src: 'https://cyber.dabamos.de/88x31/learn_html.gif', alt: 'learn_html' },
    { src: 'https://cyber.dabamos.de/88x31/mymusic.gif', alt: 'mymusic' },
    { src: 'https://cyber.dabamos.de/88x31/newlambda.gif', alt: 'newlambda' },
    { src: 'https://cyber.dabamos.de/88x31/newgrounds.gif', alt: 'newgrounds' },
    { src: 'https://cyber.dabamos.de/88x31/notepadpp3.gif', alt: 'notepadpp3' },
    { src: 'https://cyber.dabamos.de/88x31/notepad-logo3.gif', alt: 'notepad-logo3' },
    { src: 'https://cyber.dabamos.de/88x31/reddit.gif', alt: 'reddit' },
    { src: 'https://cyber.dabamos.de/88x31/superultrarare.gif', alt: 'superultrarare' },
    { src: 'https://anlucas.neocities.org/winrar.jpg', alt: 'winrar' },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/brekingbad.png',
      alt: 'brekingbad',
    },
    { src: 'https://inpieces.rip/pix/thanksvhs.gif', alt: 'thanksvhs' },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/loves1ck.png',
      alt: 'loves1ck',
    },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/lovelandisle.png',
      alt: 'lovelandisle',
    },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/mandarin.gif',
      alt: 'mandarin',
    },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/pnfrlenm.gif',
      alt: 'pnfrlenm',
    },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/pixelbank.gif',
      alt: 'pixelbank',
    },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/quoderatdemonstrandum.gif',
      alt: 'quoderatdemonstrandum',
    },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/retrogamer.gif',
      alt: 'retrogamer',
    },
    { src: 'https://capstasher.neocities.org/88x31Buttons/beyes.gif', alt: 'beyes' },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/stockinganarchy.png',
      alt: 'stockinganarchy',
    },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/neppermint.gif',
      alt: 'neppermint',
    },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/primaballerina.png',
      alt: 'primaballerina',
    },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/cloverleaf.png',
      alt: 'cloverleaf',
    },
    {
      src: 'https://neonaut.neocities.org/images/buttons/neocitizens/emeralds.jpg',
      alt: 'emeralds',
    },
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
