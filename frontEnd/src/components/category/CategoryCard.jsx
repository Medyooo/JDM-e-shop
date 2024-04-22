import { Col } from 'react-bootstrap'

const CategoryCard = ({ background, img, title }) => {
  return (
    <Col
      className='my-4 d-flex justify-content-center  align-items-center '
      xs='6'
      sm='6'
      md='4'
      lg='2'

    >
      <div className='allCard mb-3 '>
        <div className='categoty-card ' style={{ backgroundColor: `${background}` }} />
        <img alt='zcv' src={img} className='categoty-card-img' />
        <p className='categoty-card-text my-2'>{title}</p>
      </div>
    </Col>
  )
}

export default CategoryCard
