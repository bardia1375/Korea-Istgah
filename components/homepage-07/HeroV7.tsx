import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import RevealWrapperV2 from '../animation/RevealWrapperV2'
import CtaImageSlider from '../shared/CtaImageSlider'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import SkewMarquee from '../shared/SkewMarquee'
import HeroAbout from './HeroAbout'
import hero01 from '@/public/images/699in420/699in420.webp'
const HeroV7 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 max-sm:px-3 md:pb-16 md:pt-44 lg:pb-[88px] xl:pb-[100px]">
      <div className="absolute left-[12%] top-40 -z-10 h-2/6 w-2/6 blur-[35px] md:blur-[60px]">
        <HeroGradientAnimation />
      </div>

      <RevealWrapper className="mx-auto max-w-screen-xl px-5">
        <div>
          <h1 className="text-2xl font-normal leading-snug tracking-normal max-lg:text-center sm:text-4xl sm:leading-tight sm:tracking-tight md:text-6xl md:leading-[1.2] md:tracking-[-1px] lg:text-5xl lg:leading-[1.25] xl:leading-[1.3] xl:tracking-[-2.88px]">
            Embassy of the Republic of Korea in the Islamic Republic of Iran
            <CtaImageSlider
              slides={[
                { id: '1', img: '/images/500in200-/3.webp' },
                // { id: '2', img: '/images/500in200-/4.webp' },
              ]}
            />
          </h1>
          <h2 className="text-lg leading-snug tracking-normal max-lg:text-center sm:text-4xl sm:leading-tight">
            {' '}
            Commemorating the National Day of the Republic of Korea
          </h2>
        </div>

        <p className="mt-10 max-w-[770px] font-normal max-lg:mx-auto">
          The Embassy of the Republic of Korea in the Islamic Republic of Iran is honored to host a reception
          celebrating the National Day of the Republic of Korea. This occasion not only commemorates the founding of the
          Republic, but also honors Korea’s rich history, culture, and traditions while strengthening the bonds of
          friendship and cooperation between Korea and Iran
        </p>
      </RevealWrapper>

      <SkewMarquee />

      <HeroAbout />
    </section>
  )
}

export default HeroV7
