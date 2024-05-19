import { Col, Row } from 'react-bootstrap'
import prod from '../../assets/images/prod1.png'
import deleteicon from '../../assets/images/delete.png'

const CartItem = () => {
  return (
    <Col xs='12' className='cart-item-body my-2 d-flex pt-2 mt-4  '>
      <img width='160px' height='197px' src={prod} alt='' />
      <div className='w-100 mx-3'>
        <Row className='justify-content-between  align-items-center py-2'>
          <Col sm='12' className=' d-flex flex-row justify-content-between'>
            <div className='d-inline pt-2 cat-text'>Nom de la category</div>
            <div className='d-flex pt-2 ' style={{ cursor: 'pointer' }}>
              <img src={deleteicon} alt='' width='20px' height='24px' />
              <div className=' cat-text d-inline mx-2 ' style={{ fontSize: '18px' }}>Supprimer</div>
            </div>
          </Col>
        </Row>
        <Row className='d-flex flex-row justify-content-center align-items-center '>
          <Col sm='12' className=' d-flex flex-row  align-items-center'>
            <div className='d-inline pt-2 cat-title'>
              Title Title Title

            </div>
            <div className='d-inline pt-3 px-2 cat-rate'>4.5</div>
          </Col>
        </Row>
        <Row>
          <Col sm='12' className='mt-3'>
            <div className='cat-text d-inline roboto-medium '>Marque :</div>
            <div className='barnd-text d-inline mx-1'>Sultan </div>
          </Col>
        </Row>
        <Row>
          <Col sm='12' className='mt-2 d-flex' />
        </Row>

        <Row className='justify-content-between mt-2'>
          <Col sm='12' className=' d-flex flex-row justify-content-between'>
            <div className='d-inline pt-2 d-flex'>
              <div className='cat-text d-inline'>Quantitée :</div>
              <input
                className='mx-2 '
                type='number'
                defaultValue={1}
                style={{ width: '40px', height: '25px' }}
              />
            </div>
            <div className='d-inline pt-2 barnd-text'>28.99 €</div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default CartItem
