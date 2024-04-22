import { Navbar, Container, FormControl, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/images/logo1.png'

const NavBarLogin = () => {
  return (
    <Navbar className='sticky-top' style={{}} variant='dark' expand='sm'>
      <Container>
        <Navbar.Brand>
          <a href='/'>
            <img src={logo} className='logo' alt='logo' />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' style={{ color: '#4a2200' }}>
          <FormControl
            type='search'
            placeholder='Recherche...'
            className='me-2 w-100 text-center'
            aria-label='Search'
          />
          <Nav className='me-auto '>
            <Nav.Link
              href='/login'
              className='d-flex mt-3 justify-content-center '
            >
              {/* <img src={login} className="login-img" alt="sfvs" /> */}
              <p className='nav-text'><FontAwesomeIcon icon={faRightToBracket} size='xl' style={{ color: '#4a2200' }} /> Identifiez-vous</p>
            </Nav.Link>
            <Nav.Link
              href='/cart'
              className=' d-flex mt-3 justify-content-center'
            >

              <p className='nav-text '><FontAwesomeIcon icon={faCartShopping} size='xl' style={{ color: '#4a2200' }} /> Panier</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarLogin
