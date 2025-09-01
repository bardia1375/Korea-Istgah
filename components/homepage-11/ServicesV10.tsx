'use client'

import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const data = [
  {
    id: 1,
    title: 'Japchae - 잡채',
    description:
      "Japchae is Korea's classic stir-fried glass-noodle dish with vibrant vegetables, seasoned with soy sauce, sesame oil, and a touch of sugar. Often garnished with beef or egg, it's enjoyed at celebrations and in everyday meals.",
    image: '/images/370in561-/Japchae.webp',
  },
  {
    id: 2,
    title: 'Kimchi - 김치',
    description:
      "Kimchi is Korea's most famous traditional dish, made by fermenting vegetables usually cabbage with chili pepper, garlic, and other spices. It is spicy, sour, and full of healthy probiotics. Kimchi is eaten with almost every Korean meal and is a symbol of Korean culture and tradition.",
    image: '/images/370in561-/Kimchi.webp',
  },
  {
    id: 3,
    title: 'YUKJEON - 육전',
    description: "Yukjeon is a traditional Korean dish of thin beef slices coated in flour and egg, then pan-fried. It has a soft texture with a savory, rich flavor Commonly served during holidays like Chuseok and Lunar New Year, it's a festive favorite.",
    image: '/images/370in561-/YUKJEON.webp',
  },
  {
    id: 4,
    title: 'ТТЕОКВОККІ - 떡복이',
    description: "Tteokbokki is a popular Korean dish made with chewy rice cakes in a spicy-sweet gochujang sauce. The rice cakes absorb the bold, savory flavors, making it a comforting and satisfying meal. Often served as street food, it's loved for its balance of heat, sweetness, and texture.",
    image: '/images/370in561-/ТТЕОКВОККІ.webp',
  },
  
]

const ServicesV10 = () => {
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Traditional Korean Cuisine</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3"></h2>
          </TextAppearAnimation>

          <RevealWrapper as="p"></RevealWrapper>
        </div>
        <div ref={triggerRef} className="service-section pt-10">
          <div
            ref={contentRef}
            className="video-section service-wrapper flex w-fit flex-nowrap gap-6 overflow-x-hidden pl-[5%] pr-[30px]">
            {data.map((item) => (
              <div key={item.id} className="group w-[370px] cursor-fancy">
                <figure className="hero-video-container overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[240px] md:h-[280px] lg:h-[320px]"
                  />
                </figure>
                <h3 className="mb-2.5 mt-[30px] text-2xl leading-[1.1] tracking-normal md:text-[32px]">{item.title}</h3>
                <p className="max-w-[95%] text-base leading-[1.6] tracking-[0.32px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesV10
