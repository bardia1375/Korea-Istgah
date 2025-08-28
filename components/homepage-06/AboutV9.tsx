'use client'
import useReveal from '@/hooks/useReveal'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
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
    <section className="relative overflow-hidden bg-gradient-to-b pb-20 pt-12">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="rv-badge mx-auto mb-4">
            <span className="rv-badge-text text-sm uppercase tracking-widest text-blue-600">
              Highlights of the Celebration
            </span>
          </RevealWrapper>

          <TextAppearAnimation>
            <h2
              ref={gsapRef}
              className="mb-10 mt-4 text-center text-3xl font-extrabold leading-snug text-gray-800 md:text-4xl lg:text-5xl"
            >
              Celebrating the National Day of
              <br className="hidden md:block" />
              the Republic of Korea
            </h2>
          </TextAppearAnimation>
        </div>

        <div
          ref={revealRef}
          className="mx-auto max-w-3xl space-y-8 rounded-2xl bg-white/70 p-8 shadow-lg backdrop-blur-md dark:bg-gray-900/70"
        >
          {/* بخش ۱ */}
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="text-lg font-semibold text-red-700">1. Guest Arrival and Welcome Ceremony</h3>
            <ul className="mt-2 list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>National Anthems of the Republic of Korea and the Islamic Republic of Iran</li>
              <li>Opening Remarks by H.E. the Ambassador of the Republic of Korea</li>
            </ul>
          </div>

          {/* بخش ۲ */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-700">2. Korean Cultural Experience</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Traditional Korean Cuisine</p>
          </div>

          {/* بخش ۳ */}
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="text-lg font-semibold  text-red-700">3. Musical Performance</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Istgah Orchestra</p>
          </div>

          {/* بخش ۴ */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-700">4. Taekwondo Demonstration</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Takavaran Taekwondo Performance Group</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutV9
