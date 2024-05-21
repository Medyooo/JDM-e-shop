import { Container, Row, Spinner } from 'react-bootstrap'

import SubTitle from '../utility/SubTitle'
import CategoryCard from '../category/CategoryCard'
import HomeCategoryHook from '../../customHook/category/HomeCategoryHook'

const HomeCategory = () => {
  const [category, loading] = HomeCategoryHook()
  return (
    <Container>
      <SubTitle title='Categories' btntitle='Voir Plus' pathText='/allcategory' />
      <Row>
        {
          loading === false
            ? (

                category.data
                  ? (category.data.slice(0, 6).map((item, index) => {
                      return (<CategoryCard title={item.name} key={index} background='#F4DBA4' img={item.image} />)
                    })

                    )
                  : null
              )
            : <Spinner animation='border' variant='warning' />

      }

      </Row>
    </Container>
  )
}

export default HomeCategory
