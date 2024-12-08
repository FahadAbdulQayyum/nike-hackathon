import Category from '@/components/Category'
import FlashSale from '@/components/FlashSale'
import SellingProducts from '@/components/SellingProducts'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import UpperBanner from '@/components/UpperBanner'
import NikeApp from '@/components/NikeApp'
import FirstLook from '@/components/FirstLook'
import Featured from '@/components/Featured'
import DontMiss from '@/components/DontMiss'
import GearUp from '@/components/GearUp'
import Essential from '@/components/Essential'
import CategoryList from '@/components/CategoryList'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      {/* <UpperBanner />
      <Navbar /> */}
      <NikeApp />
      <Hero />
      <FirstLook />
      <FlashSale />
      <Featured />
      <GearUp />
      <DontMiss />
      <Essential />
      {/* <Category />
      <SellingProducts /> */}
      <CategoryList />
      {/* <Footer/> */}
    </div>
  )
}

export default Home
