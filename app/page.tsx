import Hero from '@/components/homepage-01/Hero'
import Portfolio from '@/components/homepage-01/Portfolio'
import Testimonial from '@/components/homepage-01/Testimonial'
import HeroV7 from '@/components/homepage-07/HeroV7'
import OurWork from '@/components/homepage-07/OurWork'
import PricingCard from '@/components/homepage-07/PricingCard'
import ProcessV4 from '@/components/homepage-07/ProcessV4'
import About from '@/components/shared/About'
import ClientsV3 from '@/components/shared/ClientsV3'
import Community from '@/components/shared/Community'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import ServicesV6 from '@/components/shared/ServicesV6'
import ServicesV8 from '@/components/shared/ServicesV8'
import TestimonialV2 from '@/components/shared/TestimonialV2'
import Video from '@/components/shared/Video'
import AboutV3 from './AboutV3'
import ServicesCard from '@/components/shared/ServicesCard'
import { servicesType } from '@/components/shared/Services'
import getMarkDownData from '@/utils/GetMarkDownData'
import AboutV9 from '@/components/homepage-06/AboutV9'
import ServicesV10 from '@/components/homepage-11/ServicesV10'
import HeroV14 from '@/components/homepage-14/HeroV14'
import PortfolioV6 from '@/components/homepage-20/PortfolioV6'
import ProcessV10 from '@/components/homepage-19/ProcessV10'
import TestimonialV5 from '@/components/homepage-04/TestimonialV5'
import BlogPostV7 from '@/components/homepage-12/BlogPostV7'
import VideoV2 from '@/components/shared/VideoV2'
import VideoV3 from '@/components/shared/VideoV3'

import TestimonialV6 from '@/components/homepage-04/TestimonialV6'
import TestimonialV7 from '@/components/homepage-04/TestimonialV7'

export const metadata = {
  title: 'Korea Celebration',
}
const servicesData: servicesType[] = getMarkDownData('data/services')
const blogPosts = getMarkDownData('data/ai-solutions/blog')

const Home = () => {
  return (
    <LayoutOne>
      {/* <Hero />s
      <Video />
      <About />
      <Portfolio />
      <ClientsV3 />
      <ServicesV8 />
      <Community />
      <FAQ />
      <Testimonial />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA> */}
      {/* <ClientsV3 /> */}
      {/* <HeroV14 /> */}
      <HeroV7 />
      <Video />
      <AboutV9 />
      <ServicesV10 />
      <VideoV2 />
      {/* <BlogPostV7 posts={blogPosts} /> */}
      {/* <ProcessV4 /> */}
      <OurWork />
      <VideoV3 />
      {/* <ServicesCard servicesData={servicesData} /> */}
      <ServicesV6 />
      <TestimonialV5 />
      <TestimonialV6 />
      <TestimonialV7 />
      {/* <TestimonialV2 /> */}
      {/* <PortfolioV6 /> */}
      {/* <ProcessV10 /> */}
      {/* <PricingCard showHeader={true} /> */}
      {/* <CTA showContactForm>
        Let’s
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        Create
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Something Iconic</span>
      </CTA> */}
    </LayoutOne>
  )
}

export default Home
