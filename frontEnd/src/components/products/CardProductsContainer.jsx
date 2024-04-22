import ProductCard from './ProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utility/SubTitle'
import prod1 from '../../assets/images/prod.png'
import prod2 from '../../assets/images/tapis1.png'

const CardProductsContainer = ({ title, btntitle, pathText }) => {
  return (

    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row>
        <ProductCard prod={prod1} />
        <ProductCard prod={prod2} />
        <ProductCard prod={prod1} />
        <ProductCard prod={prod1} />

      </Row>
    </Container>

  )
}

export default CardProductsContainer
