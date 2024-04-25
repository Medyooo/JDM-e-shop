import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import SubTitle from '../utility/SubTitle'
import CategoryCard from '../category/CategoryCard'
import prod1 from '../../assets/images/prod1.png'
import { GetAllCategory } from '../../redux/actions/CategoryAction'
import { useEffect } from 'react'

const HomeCategory = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetAllCategory())
  }, [])

  const data = useSelector(state => state.allCategory.category)
  const loading = useSelector(state => state.allCategory.loading)

  console.log(data)
  console.log(loading)
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
