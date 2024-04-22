import { Col, Container, Row } from 'react-bootstrap'

const CategoryHeader = () => {
  return (
    <div className='cat-header'>
      <Container>
        <Row>
          <Col className='d-flex justify-content-start py-2 flex-wrap'>
            <div className='cat-text-header '>Tout</div>
            <div className='cat-text-header'>Solde</div>
            <div className='cat-text-header'>Solde</div>
            <div className='cat-text-header'>Solde</div>
            <div className='cat-text-header'>Solde</div>
            <div className='cat-text-header'>Solde</div>
            <div className='cat-text-header'>Solde</div>
            <div className='cat-text-header'>Plus</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CategoryHeader
