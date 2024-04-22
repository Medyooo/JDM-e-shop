import ProductCard from './ProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utility/SubTitle'

const CardProductsContainer = ({ title, btntitle, pathText }) => {
  return (

    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </Row>
    </Container>

  )
}

export default CardProductsContainer
