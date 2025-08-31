import image01 from '@/public/images/370in451/1.png'
import image02 from '@/public/images/370in451/2.png'
import image03 from '@/public/images/370in451/3.png'
import image04 from '@/public/images/370in451/4.png'
import image05 from '@/public/images/370in451/5.png'
import image06 from '@/public/images/370in451/6.png'
import image07 from '@/public/images/370in451/6.png'
import image08 from '@/public/images/370in451/6.png'
import image09 from '@/public/images/370in451/6.png'
import logoDark from '@/public/images/500in200-/korea-istgah.png'

// import image11 from '@/public/images/370in451-/1.webp'
// import image12 from '@/public/images/370in451-/2.webp'
// import image13 from '@/public/images/370in451-/3.webp'
// import image14 from '@/public/images/370in451-/4.webp'
// import image15 from '@/public/images/370in451-/5.webp'
// import image16 from '@/public/images/370in451-/6.webp'
// import image17 from '@/public/images/370in451-/6.webp'
// import image18 from '@/public/images/370in451-/6.webp'
// import image19 from '@/public/images/370in451-/6.webp'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WORK_IMAGES = [
  { id: 1, src: image01, alt: 'Client Logo 1' },
  { id: 2, src: image02, alt: 'Client Logo 2' },
  { id: 3, src: image03, alt: 'Client Logo 3' },
  { id: 4, src: image04, alt: 'Client Logo 4' },
  { id: 5, src: image05, alt: 'Client Logo 5' },
  { id: 6, src: image06, alt: 'Client Logo 6' },
  { id: 7, src: image07, alt: 'Client Logo 7' },
  { id: 8, src: image08, alt: 'Client Logo 8' },
  { id: 9, src: image09, alt: 'Client Logo 9' },
  // { id: 10, src: image11, alt: 'Client Logo 1' },
  // { id: 12, src: image12, alt: 'Client Logo 2' },
  // { id: 13, src: image13, alt: 'Client Logo 3' },
  // { id: 14, src: image14, alt: 'Client Logo 4' },
  // { id: 15, src: image15, alt: 'Client Logo 5' },
  // { id: 16, src: image16, alt: 'Client Logo 6' },
  // { id: 17, src: image17, alt: 'Client Logo 7' },
  // { id: 18, src: image18, alt: 'Client Logo 8' },
  // { id: 19, src: image19, alt: 'Client Logo 9' },
]

const OurWork = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Korea & Istgah</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="appear·mx-auto·max-w-[770px]·text-2xl">We craft emotionally engaging stories.</h2>
          </TextAppearAnimation>
        </div>
      </div>

      {/* Subtle Korean flag watermark */}
      <div className="absolute left-12 top-0">
        <Image
          src={logoDark}
          alt="Flag of the Republic of Korea"
          width={80}
          height={80}
          className="opacity-1 h-auto"
          priority={false}
        />
      </div>
      <div className="absolute right-12 top-0">
        <Image
          src={logoDark}
          alt="Flag of the Republic of Korea"
          width={80}
          height={80}
          className="opacity-1 h-auto"
          priority={false}
        />
      </div>

      <RevealWrapper>
        <Marquee speed={50} className="pointer-events-none touch-pan-y md:pointer-events-auto">
          <div className="flex transform-gpu items-center gap-4 will-change-transform md:gap-[30px]">
            {WORK_IMAGES.slice(0, 5).map(({ src, alt, id }) => (
              <div key={id} className="h-72 max-w-60 first:ml-4 md:h-[470px] md:max-w-[370px] md:first:ml-[30px]">
                <Image src={src} alt={alt} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={50} direction="right" className="pointer-events-none touch-pan-y md:pointer-events-auto">
          <div className="flex transform-gpu items-center justify-around gap-4 pt-[30px] will-change-transform md:gap-[30px]">
            {WORK_IMAGES.toReversed().map(({ src, alt, id }) => (
              <div key={id} className="h-72 max-w-60 first:ml-4 md:h-[470px] md:max-w-[370px] md:first:ml-[30px]">
                <Image src={src} alt={alt} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default OurWork
