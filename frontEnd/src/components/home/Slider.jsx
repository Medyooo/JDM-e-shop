import { useState } from 'react'
import { Carousel } from 'react-bootstrap'

import slider1 from '../../assets/images/photo2_slider.jpg'
import slider2 from '../../assets/images/slider2.png'
import slider3 from '../../assets/images/slider3.png'

const Slider = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='slider-background' interval={2000}>
          <div className='d-flex flex-row justify-center align-items-center'>
            <img
              style={{ height: '50vh', width: '100vw', objectFit: 'cover' }}
              className='d-block w-100 imgSlider'
              src={slider1}
              alt='First slide'
            />
          </div>
          <Carousel.Caption>
            <h3 className='sliderTitle'>Découvrez les Saveurs du Maroc</h3>
            <p className=' '>Plongez dans un univers de goûts uniques avec nos produits traditionnels directement sourcés des artisans locaux.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider-background2' interval={2000}>
          <div className='d-flex flex-row justify-center align-items-center'>
            <img
              style={{ height: '50vh', width: '100vw', objectFit: 'cover' }}
              className='d-block w-100 imgSlider'
              src={slider2}
              alt='First slide'
            />
          </div>
          <Carousel.Caption>
            <h3 className='sliderTitle'>L'Excellence des Vins Marocains</h3>
            <p>Explorez notre sélection exclusive de vins fins marocains, parfaits pour chaque occasion.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider-background3' interval={2000}>
          <div className='d-flex flex-row justify-center align-items-center'>
            <img
              style={{ height: '50vh', width: '100vw', objectFit: 'cover' }}
              className='d-block w-100 imgSlider'
              src={slider3}
              alt='First slide'
            />
          </div>
          <Carousel.Caption>
            <h3 className='sliderTitle'>Art et Tradition à votre Portée</h3>
            <p>
              Embrassez l'art de vivre marocain avec nos collections authentiques, alliant tradition et modernité.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
