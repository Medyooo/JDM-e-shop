import { Row } from 'react-bootstrap'

const SideFilter = () => {
  return (

    <div className='mt-3'>
      <Row>
        <div className='d-flex flex-column mt-2'>
          <div className='filter-title'>Categories</div>
          <div className='d-flex mt-3'>
            <input type='checkbox' value='' />
            <div className='filter-sub mx-1 '>Tout</div>
          </div>
          <div className='d-flex mt-2'>
            <input type='checkbox' value='' />
            <div className='filter-sub mx-1 '>soldes</div>
          </div>
          <div className='d-flex mt-2'>
            <input type='checkbox' value='' />
            <div className='filter-sub mx-1 '>soldes</div>
          </div>
          <div className='d-flex mt-2'>
            <input type='checkbox' value='' />
            <div className='filter-sub mx-1 '>soldes</div>
          </div>
          <div className='d-flex mt-2'>
            <input type='checkbox' value='' />
            <div className='filter-sub mx-1 '>soldes</div>
          </div>
        </div>

        <div className='d-flex flex-column mt-2'>
          <div className='filter-title mt-3'>Marques</div>
          <div className='d-flex mt-3'>
            <input type='checkbox' value='' />
            <div className='filter-sub  mx-1 '>soldes</div>
          </div>
          <div className='d-flex mt-2'>
            <input type='checkbox' value='' />
            <div className='filter-sub mx-1 '>soldes</div>
          </div>
          <div className='d-flex mt-2'>
            <input type='checkbox' value='' />
            <div className='filter-sub mx-1 '>soldes</div>
          </div>
        </div>

        <div className='filter-title my-3'>Prix</div>
        <div className='d-flex'>
          <p className='filter-sub my-2'>Min:</p>
          <input
            className='m-2 text-center'
            type='number'
            style={{ width: '50px', height: '25px' }}
          />
        </div>
        <div className='d-flex'>
          <p className='filter-sub my-2'>Max:</p>
          <input
            className='m-2 text-center '
            type='number'
            style={{ width: '50px', height: '25px' }}
          />
        </div>
      </Row>
    </div>

  )
}

export default SideFilter
