'use client'

import { useState, useEffect } from 'react'
import HeroV7 from '@/components/homepage-07/HeroV7'
import OurWork from '@/components/homepage-07/OurWork'
import ProcessV4 from '@/components/homepage-07/ProcessV4'
import AboutV9 from '@/components/homepage-06/AboutV9'
import Video from '@/components/shared/Video'
import ServicesV10 from '@/components/homepage-11/ServicesV10'
import ServicesV6 from '@/components/shared/ServicesV6'
import PortfolioV6 from '@/components/homepage-20/PortfolioV6'

const HomePageContent = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set the loaded state to true after component mounts
    setIsLoaded(true)
  }, [])

  return (
    <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroV7 />
      <AboutV9 />
      <Video />
      <ProcessV4 />
      <OurWork />
      <ServicesV10 />
      <ServicesV6 />
      <PortfolioV6 />
    </div>
  )
}

export default HomePageContent
