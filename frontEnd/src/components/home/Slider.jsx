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
              className='d-block w-100'
              src={slider1}
              alt='First slide'
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider-background2' interval={2000}>
          <div className='d-flex flex-row justify-center align-items-center'>
            <img
              style={{ height: '50vh', width: '100vw', objectFit: 'cover' }}
              className='d-block w-100'
              src={slider2}
              alt='First slide'
            />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider-background3' interval={2000}>
          <div className='d-flex flex-row justify-center align-items-center'>
            <img
              style={{ height: '50vh', width: '100vw', objectFit: 'cover' }}
              className='d-block w-100'
              src={slider3}
              alt='First slide'
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
