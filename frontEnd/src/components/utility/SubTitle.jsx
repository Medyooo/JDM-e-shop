import { Link } from 'react-router-dom'

const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className='d-flex justify-content-between pt-4 mt-3 mb-2'>
      <div className='sub-title'>{title}</div>
      {btntitle
        ? (
          <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
            <div className='shopping-now'>{btntitle}</div>
          </Link>
          )
        : null}

    </div>
  )
}

export default SubTitle
