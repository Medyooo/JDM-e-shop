import { Container, Row } from 'react-bootstrap'

import BrandCard from './BrandCard'
import SubTitle from '../utility/SubTitle'
import brand1 from '../../assets/images/Logo_Sultan.png'

const BrandFeatured = ({ title, btntitle }) => {
  return (

    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText='/allbrand' />
      <Row>
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

export default BrandFeatured
