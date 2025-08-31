'use client'

import gradientBg from '@/public/images/services-gradient-bg-2.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import ProcessV3 from '@/components/homepage-05/ProcessV3'

// ------------------ DATA ------------------
const servicesData = [
  {
    id: 1,
    title: 'Istgah History',
    subtitle: 'Exploring the rich cultural heritage of Korea',
    items: [
      `ISTGAH was born in 2010 with a big dream: to create an independent and private orchestra in Iran. 
But this dream quickly went beyond local borders, and ISTGAH became one of the main players in music, musical theater and international collaborations. 
One of the turning points of this path was the concert of Richard Clayderman, the famous French pianist, for six nights in Tehran. In addition to playing a role in the musical projects of Mary Poppins and The Bride of the Dead, Istgah, has collaborated with distinguished figures such as Maestro Naser Cheshmazar, one of the greats of contemporary Iranian music, and with the cultural departments of various embassies from all five continents such as (Japan, Philippines, Turkey, Italy, Switzerland, Austria, etc.). Istgah showed that music can make ever-lasting moments for cultures.`,
    ],
  },
  {
    id: 2,
    title: 'Songs List',
    subtitle: 'Journey through the evolution of our platform',
    items: [],
  },
  {
    id: 5,
    title: 'Executive Team List',
    subtitle: 'Discovering Korean festivals and celebrations',
    items: [
      'Mahdi Norouzi - Founder & CEO',
      'Ayeh Bahmani - COO',
      'Farzad Taghizadeh - Digital Strategy Manager',
      'NazAfarin Moghadam - CDO',
      'Yasamin Hariri - Executive Coordinator',
    ],
  },
  {
    id: 4,
    title: 'Musician List',
    subtitle: 'Curated collection of memorable Korean music',
    items: [
      'Reza Fanid - Conductor',
      'Daniel Jourabchi - Violinist',
      'Armin Ghozzatian - Violinist',
      'Nafiseh Mahmoudi - Violinist',
      'Nika Karahan - Violinist',
      'Adeleh Lotfi - Violinist',
      'Sara Naderi - Violinist',
      'SeyedBardis Shams - Violinist',
      'Dariush Hejazi - Violist',
      'Arian Zamani - Violist',
      'Sina Azar Abad - Cellist',
      'Shahrzad Majd - Cellist',
      'Soroush Omoumi - Drummer',
      'Mehrdad Hamedi - Bass Guitarist',
      'Diba Vali - Harpist',
      'Zahra Bagheri - Flutist',
      'Iman Jafari Pouyan - Clarinetist & Saxophonist',
      'Ghazaleh Mirzadeh - Piccolo player',
      'Hamed Lak - Orchestra Coordinator',
    ],
  },
]

// ------------------ ACCORDION ITEM ------------------
type AccordionItemProps = {
  isActive: boolean
  onToggle: () => void
  title: string
  subtitle: string
  children: React.ReactNode
  idx: number
}

function AccordionItem({ isActive, onToggle, title, subtitle, children, idx }: AccordionItemProps) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)

  // اندازه‌گیری ارتفاع واقعی محتوا
  useEffect(() => {
    const el = bodyRef.current
    if (!el) return

    const measure = () => setContentHeight(el.scrollHeight)

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const animatedMaxHeight = isActive ? (idx === 1 ? Math.min(contentHeight, 450) : contentHeight) : 0
  const isProcessPanel = idx === 1

  // ⬇️ هندلر سبک برای سینک کردن اسکرول داخلی با لیسنرهای window.scroll (برای ریویل/انیمیشن‌ها)
  const rafRef = useRef<number | null>(null)
  const handleInnerScroll = () => {
    if (rafRef.current != null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      // اکثر کتابخانه‌ها به scroll روی window گوش می‌دهند
      window.dispatchEvent(new Event('scroll'))
    })
  }

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    },
    [],
  )

  return (
    <div
      className="faq-body-transition overflow-visible border border-secondary/10 bg-backgroundBody duration-300 dark:border-backgroundBody/10 dark:bg-dark"
      aria-expanded={isActive}>
      <button
        type="button"
        onClick={onToggle}
        className={`group relative flex w-full cursor-pointer items-center justify-between px-5 py-5 text-left md:px-10 ${
          isActive ? 'active' : ''
        }`}
        aria-controls={`accordion-panel-${idx}`}
        aria-haspopup="region">
        <h3 className="flex flex-col items-center gap-x-10 gap-y-3 text-[25px] font-normal leading-[25.2px] text-secondary dark:text-white md:flex-row md:text-5xl md:leading-[1.2]">
          <span className="text-inherit">{title}</span>
          <span className="pr-[2px] text-base text-secondary/70 dark:text-white/70 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
            {subtitle}
          </span>
        </h3>
        <div className="accordion-header-iconV5" aria-hidden>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-team-bezier group-hover:rotate-90 md:size-8">
            <path d="M5 16H27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 7L27 16L18 25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {/* پنل آکاردئون با ترنزیشن ارتفاع */}
      <div
        id={`accordion-panel-${idx}`}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: animatedMaxHeight }}
        role="region">
        <div ref={bodyRef}>
          <div
            className={`accordion-body relative flex flex-col justify-start px-10 pb-10 text-justify sm:ml-2.5 sm:flex-row sm:gap-10 md:ml-6 lg:gap-x-[73px] ${
              isProcessPanel ? 'max-h-[450px] overflow-y-auto pr-2' : ''
            }`}
            onScroll={isProcessPanel ? handleInnerScroll : undefined}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// ------------------ MAIN COMPONENT ------------------
const ServicesV6 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggleAccordion = (index: number) => setActiveIndex(activeIndex === index ? null : index)
  const blocks = useMemo(() => servicesData, [])

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
        <Image src={gradientBg} alt="gradient-bg" />
      </div>

      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Services</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">There is a lot we can do. Here is a few.</h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[1170px] [&>*:not(:last-child)]:mb-6">
          {blocks.map((service, index) => (
            <AccordionItem
              key={service.id}
              idx={index}
              isActive={activeIndex === index}
              onToggle={() => toggleAccordion(index)}
              title={service.title}
              subtitle={service.subtitle}>
              {/* متن/لیست سمت چپ */}
              <ul className="[&>*:not(:last-child)]:mb-1">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-secondary/70 dark:text-backgroundBody/70">
                    {item}
                  </li>
                ))}
              </ul>

              {/* محتوای ویژه: ProcessV4 برای بلوک دوم */}
              {index === 1 ? (
                <div className="mt-6 w-full">
                  <ProcessV3 />
                </div>
              ) : null}
            </AccordionItem>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ServicesV6
