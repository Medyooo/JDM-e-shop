import { Link } from 'react-router-dom'

const UserSideBar = () => {
  return (
    <div className='sidebar mt-2 pt-5 '>
      <div className='d-flex flex-column'>
        <Link to='/user/allorders' style={{ textDecoration: 'none' }}>
          <div className='admin-side-text  pt-4 pb-4 border-bottom p-2 mx-auto text-center'>
            Mes commandes
          </div>
        </Link>
        <Link to='/user/favoriteproducts' style={{ textDecoration: 'none' }}>
          <div className='admin-side-text border-bottom pb-4 pt-4 mx-auto p-2 text-center'>
            Mes favoris
          </div>
        </Link>
        <Link to='/user/addresses' style={{ textDecoration: 'none' }}>
          <div className='admin-side-text pt-4 pb-4 border-bottom p-2 mx-auto text-center'>
            Mes adresses
          </div>
        </Link>

        <Link to='/user/profil' style={{ textDecoration: 'none' }}>
          <div className='admin-side-text pt-4 pb-4 border-bottom p-2 mx-auto text-center'>
            Mon profil
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UserSideBar
