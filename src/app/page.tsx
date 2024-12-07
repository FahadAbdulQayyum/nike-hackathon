import FlashSale from '@/components/FlashSale'
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
    </div>
  )
}

export default Home
