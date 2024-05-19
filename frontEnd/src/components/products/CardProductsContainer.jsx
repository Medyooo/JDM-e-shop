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
        <ProductCard prodImg={prod1} prodName='Tajine en Céramique Artisanale Marocaine' prodRate={4.3} price={28.98} />
        <ProductCard prodImg={prod2} prodName='Tapis Berbère Authentique en Laine - Motifs Traditionnels Marocains' prodRate={4.7} price={249.98} />
        <ProductCard prodImg={prod1} prodName='Tajine en Céramique Artisanale Marocaine' prodRate={4.3} price={28.98} />
        <ProductCard prodImg={prod1} prodName='Tajine en Céramique Artisanale Marocaine' prodRate={4.3} price={28.98} />

      </Row>
    </Container>

  )
}

export default CardProductsContainer
