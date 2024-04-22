import { Container, Row } from 'react-bootstrap'

import BrandCard from './BrandCard'
import SubTitle from '../utility/SubTitle'
import brand1 from '../../assets/images/Logo_Sultan.png'
import brand2 from '../../assets/images/chambre-dartisanat.jpg'
import brand3 from '../../assets/images/volubilia-logo.jfif'
import brand4 from '../../assets/images/boulaoune-logo.jpg'
import brand5 from '../../assets/images/castel.png'

const BrandFeatured = ({ title, btntitle }) => {
  return (

    <Container className='mb-5'>
      <SubTitle title={title} btntitle={btntitle} pathText='/allbrand' />
      <Row>
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand4} />
        <BrandCard img={brand5} />
        <BrandCard img={brand1} />

      </Row>
    </Container>

  )
}

export default BrandFeatured
