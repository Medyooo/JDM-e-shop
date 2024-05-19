import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'

import logo from '../../assets/images/logo1.png'
function Footer () {
  return (
    <MDBFooter className='footer-background text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom '>
        <div className='me-5 d-none d-lg-block' />

        <div>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <img href='' src={logo} className='w-25' />
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Horaire d'ouverture</h6>
              <p className='fw-bold'>
                Du Dimanche au Jeudi
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Le midi de 11h00 à 16h00
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Le soir de 19h00 à 21h30

                </a>
              </p>
              <p className='fw-bold'>
                Les Vendredis et Samedis
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Le midi de 11h00 à 16h00
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Le soir de 19h00 à 23h00

                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Liens</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Boutique et Souk
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Le restaurant
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Les menus
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                26 Rue Marie Curie, <br />44230 Saint Sébastien sur Loire
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                contact@lesjardinsdumaroc.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 02 40 56 75 75
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          lesjardinsdumaroc.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
