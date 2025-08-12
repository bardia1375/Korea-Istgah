'use client'
import useReveal from '@/hooks/useReveal'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const AboutV9 = () => {
  const { revealRef } = useReveal()

  const gsapRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (gsapRef.current) {
      gsap.fromTo(
        gsapRef.current,
        { y: 60, opacity: 0, scale: 0.8, rotate: -5 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 2,
          ease: 'power4.out',
        },
      )
    }
  }, [])
  return (
    <section className="relative overflow-hidden pb-14 pt-6 md:pb-16 lg:pb-[88px] lg:pt-12 xl:pb-[100px]">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="rv-badge">
            <span className="rv-badge-text">About Celebration</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 ref={gsapRef} className="text-appear mb-8 mt-3 text-center text-2xl">
              Celebrating the National Day of
              <br className="hidden md:block" />
              the Republic of Korea
            </h2>
          </TextAppearAnimation>
        </div>

        <h3
          ref={revealRef}
          className="text-center space-x-2 text-base font-normal text-secondary/90 dark:text-backgroundBody/70 lg:text-3xl lg:leading-[1.2] lg:tracking-[0.72px] xl:text-4xl">
          The National Day of the Republic of Korea is a time to honor the nation’s rich history, vibrant culture, and
          the enduring spirit of its people. This celebration reflects the shared values of friendship, cooperation, and
          cultural exchange between Korea and nations around the world. From traditional performances and art
          exhibitions to culinary experiences, the event is a tribute to the heritage and progress of Korea, fostering
          deeper understanding and stronger connections
        </h3>
        {/* 
        <RevealWrapper as="ul" className="mx-auto mt-[56px] flex list-none justify-center">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link  href="/team" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>Meet the Team</span>
              </div>
              <div className="rv-button-bottom">
                <span>Meet the Team</span>
              </div>
            </Link>
          </li>
        </RevealWrapper> */}
      </div>
    </section>
  )
}

export default AboutV9
