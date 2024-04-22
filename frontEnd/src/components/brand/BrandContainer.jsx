import { Container, Row } from 'react-bootstrap'

import BrandCard from './BrandCard'
import brand1 from '../../assets/images/Logo_Sultan.png'

const BrandContainer = ({ title, btntitle }) => {
  return (
    <Container>
      <div className=' my-4 sub-title'>Nos Marques</div>
      <Row className='my-1 d-flex justify-content-between'>
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />

      </Row>
    </Container>
  )
}

export default BrandContainer
