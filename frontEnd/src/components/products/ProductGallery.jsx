import { useRef, useState } from 'react'
import ReactImageMagnify from '@blacklab/react-image-magnify'

import 'react-image-gallery/styles/css/image-gallery.css'
import prod from '../../assets/images/prod.png'
import prod1 from '../../assets/images/prod1.png'

const images = [prod, prod1, prod]

const ProductGallery = () => {
  const [img, setImg] = useState(images[0])
  const refs = useRef([])

  const hoverHandler = (image, i) => {
    setImg(image)
    if (refs.current[i]) {
      refs.current[i].classList.add('active')
    }
    refs.current.forEach((ref, j) => {
      if (i !== j && ref) {
        ref.classList.remove('active')
      }
    })
  }

  const addRefs = (el, index) => {
    refs.current[index] = el
  }

  return (

    <div className='product-gallary-card '>
      <div className='left'>
        <div className='left_1'>
          {images.map((image, i) => (
            <div
              className={i === 0 ? 'img_wrap active' : 'img_wrap'}
              key={i}
              onMouseOver={() => hoverHandler(image, i)}
              ref={(el) => addRefs(el, i)}
            >
              <img src={image} alt={`Product ${i}`} />
            </div>
          ))}
        </div>
        <div className='left_2'>
          <ReactImageMagnify
            {...{
              imageProps: {
                alt: 'Zoom image',
                isFluidWidth: true,
                src: img,
                height: 400,
                width: 400

              },
              magnifiedImageProps: {
                src: img,
                width: 1200,
                height: 1200

              },
              enlargedImageContainerDimensions: {
                width: '150%',
                height: '150%'
              }
            }}
          />

          <p className='under-gallery'>Passez la souris sur l'image pour Zoomer</p>

        </div>

      </div>
    </div>

  )
}

export default ProductGallery
