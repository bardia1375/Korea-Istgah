'use client'

import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'

interface SliderImg {
  id: string
  img: string
}

interface CtaImageSliderProps {
  slides: SliderImg[]
}

const CtaImageSlider: FC<CtaImageSliderProps> = ({ slides }) => {
  const ctaSlider = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let currentSlide = 0
    const totalSlides = slides.length

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides
      if (ctaSlider.current) {
        ctaSlider.current.style.transform = `translateY(-${currentSlide * 150}px)`
      }
    }

    const intervalId = setInterval(nextSlide, 3000)
    return () => clearInterval(intervalId)
  }, [slides.length])

  return (
    <div className="cta-slider-container flex translate-y-2 items-center justify-center max-sm:mb-5 max-sm:mt-2.5 max-sm:block sm:!mx-5 sm:inline-block sm:translate-y-[20px]">
      <div
        ref={ctaSlider}
        className="cta-inline-slider flex h-[100px] w-[100px] items-center justify-center transition-transform duration-500 ease-in-out">
        {slides?.map((slide, index) => (
          <div key={slide.id} className="slide flex h-[160px] w-[160px] items-center justify-center">
            <Image
              src={slide.img}
              alt={`cta-slide-img-${index + 1}`}
              width={80}
              height={80}
              priority={index === 0}
              className="mx-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CtaImageSlider
