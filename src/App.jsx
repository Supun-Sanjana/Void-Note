
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import ScrollToTop from './Components/ScrollToTop'
import Features from './Components/Features/Features'
import Testermonial from './Components/Testermonials/Testermonial'
import Pricing from './Components/Pricing/Pricing'
import NewsLetter from './Components/NewsLetter'

function App() {


  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero />
      <Features />
      <Testermonial />
      <Pricing/>
      <NewsLetter/>

    </>
  )

}

export default App
