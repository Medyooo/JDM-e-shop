import { Row } from 'react-bootstrap'

import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = () => {
  return (
    <div>
      <div className='admin-content-text mt-3 mb-4'>Gestion des produits</div>
      <Row className='justify-content-start'>
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
      </Row>
    </div>
  )
}

export default AdminAllProducts
