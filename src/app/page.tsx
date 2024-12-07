import Category from '@/components/Category'
import FlashSale from '@/components/FlashSale'
import SellingProducts from '@/components/SellingProducts'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import UpperBanner from '@/components/UpperBanner'

const Home = () => {
  return (
    <div>
      <UpperBanner />
      <Navbar />
      <Hero />
      <FlashSale />
      <Category />
      <SellingProducts />
    </div>
  )
}

export default Home
