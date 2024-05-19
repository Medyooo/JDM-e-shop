import { Col, Row } from 'react-bootstrap'

const ProductText = () => {
  return (
    <div className='mx-5 px-4 '>
      <Row className='mt-2'>
        <div className='cat-text'>Nom de category</div>
      </Row>
      <Row>
        <Col md='8' className='mt-3'>
          <div className='cat-title d-inline'>
            Title Title Title <div className='cat-rate d-inline mx-3'>4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md='8' className='mt-4'>
          <div className='cat-text d-inline'>Nom de la Marque :</div>
          <div className='barnd-text d-inline mx-1'>Sultan </div>
        </Col>
      </Row>

      <Row className='mt-4'>
        <div className='cat-text'>Description :</div>
      </Row>
      <Row className='mt-2'>
        <Col md='10'>
          <div className='product-description d-inline'>
            Text description Text description Text description Text description Text description Text description Text description Text description Text description Text description Text description Text description Text description Text description Text description Text description Text description Text description              Text description

          </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md='12'>
          <div className='product-price d-inline px-3 py-3 '>28.99 EUR</div>
          <button className='product-cart-add px-3 d-inline mx-3'>Ajouter Au Panier</button>
        </Col>
      </Row>
    </div>
  )
}

export default ProductText
