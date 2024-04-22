import Slider from '../../components/home/Slider'
import HomeCategory from '../../components/home/HomeCategory'
import CardProductsContainer from '../../components/products/CardProductsContainer'
import DiscountSection from '../../components/home/DiscountSection'
import BrandFeatured from '../../components/brand/BrandFeatured'

function HomePage () {
  return (
    <div>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title='Les Populaires' btntitle='Voir Plus' pathText='/products' />
      <DiscountSection />
      <CardProductsContainer title='Les Nouveautés' btntitle='Voir Plus' pathText='/products' />
      <BrandFeatured title='Nos Marques' btntitle='Voir Plus' />

    </div>
  )
}

export default HomePage
