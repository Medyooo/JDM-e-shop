import { Row } from 'react-bootstrap'

import AdminAllOrdersCard from './AdminAllOrdersCard'

const AdminAllOrders = () => {
  return (
    <div>
      <div className='admin-content-text mt-3 mb-4'>Gestion des commandes </div>
      <Row className='justify-content-between'>
        <AdminAllOrdersCard />
        <AdminAllOrdersCard />
        <AdminAllOrdersCard />
        <AdminAllOrdersCard />
      </Row>
    </div>
  )
}

export default AdminAllOrders
