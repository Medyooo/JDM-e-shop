import { Col, Row } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

const RatePost = () => {
  const Settings = {
    size: 20,
    count: 5,
    color: '#979797',
    activeColor: '#ffc107',
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className='far fa-star' />,
    halfIcon: <i className='fa fa-star-half-alt' />,
    filledIcon: <i className='fa fa-star' />,
    onChange: newValue => {
      console.log(` new value is ${newValue}`)
    }
  }

  return (
    <div>
      <Row className='mt-3 '>
        <Col sm='12' className='me-3  d-flex'>
          <div className='rate-name  d-inline ms-3 mt-1 '>Mohamed Larbi</div>
          <ReactStars classNames='mx-2' {...Settings} />
        </Col>
      </Row>
      <Row className='border-bottom mx-2'>
        <Col className='d-felx me-4 pb-2'>
          <textarea
            className='input-form-area p-2 mt-3'
            rows='2'
            cols='20'
            placeholder='Laissez Votre Avis....'
          />
          <div className=' d-flex justify-content-end al'>
            <button className='product-cart-add px-3  py-2 text-center d-inline'>Ajoutez un Avis</button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default RatePost
