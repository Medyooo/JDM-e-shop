import { Container, Row, Spinner } from 'react-bootstrap'

import CategoryCard from './CategoryCard'

const CategoryContainer = ({ data, loading }) => {
  return (
    <Container>
      <div className='my-4 sub-title'>Nos Categories</div>
      <Row className='my-2 '>
        {
          loading === false
            ? (

                data
                  ? (data.map((item, index) => {
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

export default CategoryContainer
