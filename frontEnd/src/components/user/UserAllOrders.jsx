import { Row } from 'react-bootstrap'

import UserAllOrdersItem from './UserAllOrdersItem'
import Pagination from '../utility/Pagination'

const UserAllOrders = () => {
  return (
    <div>
      <div
        className='admin-content-text pb-5 mt-4' style={{
          fontFamily: "'Poppins', sans-serif",
          fontFamily: "'Satisfy', cursive",
          fontSize: '42px'
        }}
      >Bonjour Hugo !
      </div>
      <Row className='justify-content-between mb-3'>
        <UserAllOrdersItem />
        <UserAllOrdersItem />
      </Row>
      <Pagination />
    </div>
  )
}

export default UserAllOrders
