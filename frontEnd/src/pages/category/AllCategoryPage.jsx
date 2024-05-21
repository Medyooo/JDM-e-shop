import CategoryContainer from '../../components/category/CategoryContainer'
import Pagination from '../../components/utility/Pagination'

const AllCategoryPage = () => {
  const [category, loading, pageCount, getPage] = AllCategoryPage()

  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryContainer data={category.data} loading={loading} />
      {
        pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null
      }

    </div>
  )
}

export default AllCategoryPage
