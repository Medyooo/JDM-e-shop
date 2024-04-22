import { Container, Row } from 'react-bootstrap'

import SubTitle from '../utility/SubTitle'
import CategoryCard from '../category/CategoryCard'
import prod1 from '../../assets/images/prod1.png'

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title='Categories' btntitle='Voir Plus' pathText='/allcategory' />
      <Row>
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
      </Row>
    </Container>
  )
}

export default HomeCategory
