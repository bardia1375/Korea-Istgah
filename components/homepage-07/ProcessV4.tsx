'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import processImg from '@/public/images/roadmap.webp'
import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import useReveal from '@/hooks/useReveal'

gsap.registerPlugin(ScrollTrigger)

const ProcessV4 = () => {
  const { revealRef } = useReveal()

  const schedule = [
    {
      title: 'Opening Ceremony & Ambassador’s Speech',
      desc: 'The event begins with a warm welcome and an inspiring speech by the Ambassador of the Republic of Korea, highlighting the strong bonds of friendship and cooperation.',
    },
    {
      title: 'Cultural Performances',
      desc: 'Experience traditional Korean music and dance performances that showcase the vibrant heritage of the Korean Peninsula.',
    },
    {
      title: 'Istgah Orchestra Performance',
      desc: 'Enjoy a live orchestral performance by the talented Istgah Orchestra, blending classical melodies with Korean-inspired compositions.',
    },
    {
      title: 'Gala Dinner & Reception',
      desc: 'Guests are invited to a refined dinner featuring authentic Korean cuisine and international favorites, offering a taste of cultural exchange.',
    },
    {
      title: 'Special Surprise by the Ambassador',
      desc: 'A memorable closing moment as the Ambassador presents a special surprise to honor the occasion and thank the guests for their presence.',
    },
  ]

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Event Schedule</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="appear mx-auto max-w-[770px] text-center text-2xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              National Day of the Republic of Korea
            </h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="flex flex-col gap-20 md:flex-row">
          <figure>
            <Image src={processImg} alt="Event Schedule" />
          </figure>

          <div ref={revealRef}>
            <ul className="relative space-y-10 border-secondary dark:border-backgroundBody md:border-l lg:space-y-28 xl:space-y-[170px]">
              {schedule.map((item, index) => (
                <li key={index} className="timeline-item max-w-max px-10">
                  <div className="absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-white px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] dark:bg-secondary md:-left-11 md:border-[18px] lg:-left-[52px] lg:px-6 lg:py-8">
                    <span className="inline-block bg-gradient-to-r from-backgroundBody to-gray-400 bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="mt-5 max-w-[483px] text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV4
