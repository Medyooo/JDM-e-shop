import UnopDropdown from 'unop-react-dropdown'

import sort from '../../assets/images/sort.png'

const SearchCountResult = ({ title }) => {
  const Handler = () => {

  }
  return (
    <div className='d-flex justify-content-between pt-3 px-5'>
      <div className='sub-title'>{title}</div>
      <div className='search-count-text d-flex '>
        <UnopDropdown
          onAppear={Handler}
          onDisappearStart={Handler}
          trigger={
            <p className='mx-1'>
              <img
                width='20px'
                height='20px'
                className='mx-2'
                src={sort}
                alt=''
              />
              Trier par
            </p>
                    }
          delay={0}
          align='CENTER'
          hover
        >
          <div className='card-filter'>
            <div className='border-bottom card-filter-item'>Plus vendu</div>
            <div className='border-bottom card-filter-item'>Plus noté</div>
            <div className='border-bottom card-filter-item'>Prix : Ordre croissant</div>
            <div className=' card-filter-item'>Prix : Ordre décroissant</div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  )
}

export default SearchCountResult
