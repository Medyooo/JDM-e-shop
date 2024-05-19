import { Container, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import SubTitle from '../utility/SubTitle'
import CategoryCard from '../category/CategoryCard'
import { GetAllCategory } from '../../redux/actions/CategoryAction'
import { useEffect } from 'react'

const HomeCategory = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetAllCategory())
  }, [])

  const category = useSelector(state => state.allCategory.category)
  const loading = useSelector(state => state.allCategory.loading)

  console.log(category.data)
  console.log(loading)
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
