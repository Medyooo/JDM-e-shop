import { Container, Row } from 'react-bootstrap'

import CategoryCard from './CategoryCard'
import prod1 from '../../assets/images/prod1.png'

const CategoryContainer = () => {
  return (
    <Container>
      <div className='my-4 sub-title'>Nos Categories</div>
      <Row className='my-2 d-flex justify-content-between'>
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
        <CategoryCard title='Soldes' background='#F4DBA4' img={prod1} />
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

export default CategoryContainer
