import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <div className='sidebar mt-2 pt-5 '>
      <div className='d-flex flex-column'>
        <Link to='/admin/allorders' style={{ textDecoration: 'none' }}>
          <div className='admin-side-text  pt-4 pb-4 border-bottom p-2 mx-auto text-center'>
            Gestion des commandes
          </div>
        </Link>
        <Link to='/admin/allproducts' style={{ textDecoration: 'none' }}>
          <div className='admin-side-text border-bottom pb-4 pt-4 mx-auto p-2 text-center'>
            Gestion des produits
          </div>
        </Link>
        <Link to='/admin/addbrand' style={{ textDecoration: 'none' }}>
          <div className='admin-side-text pt-4 pb-4 border-bottom p-2 mx-auto text-center'>
            Ajouter une marque
          </div>
        </Link>

        <Link to='/admin/addcategory' style={{ textDecoration: 'none' }}>
          <div className='admin-side-text pt-4 pb-4 border-bottom p-2 mx-auto text-center'>
            Ajouter une categorie
          </div>
        </Link>

        <Link to='/admin/addsubcategory' style={{ textDecoration: 'none' }}>
          <div className='admin-side-text pt-4 pb-4 border-bottom p-2 mx-auto text-center'>
            Ajouter une sous-categorie
          </div>
        </Link>
        <Link to='/admin/addproduct' style={{ textDecoration: 'none' }}>
          <div className='admin-side-text pt-4 pb-4 border-bottom p-2 mx-auto text-center'>
            Ajouter un produit
          </div>
        </Link>

      </div>
    </div>
  )
}

export default AdminSideBar
