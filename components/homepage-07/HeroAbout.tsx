'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
        Rivor Agency: Shaping the Future of Digital Innovation. We are dedicated to empowering blockchain pioneers and
        transforming the realm of digital ownership for today and beyond. images
      </h3>
    </RevealWrapper>
  ) : (
    <div className="flex w-full justify-center">
      <RevealWrapper className="rv-badge mt-8">
        <span className="rv-badge-text"> Highlights of the Celebration</span>
      </RevealWrapper>
    </div>
  )
}

export default HeroAbout
