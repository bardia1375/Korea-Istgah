import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import HeroAbout from './HeroAbout'
import logoDark from '@/public/images/500in200-/South-Korea-m.gif'

const HeroV7 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 max-sm:px-3 md:pb-16 md:pt-44 lg:pb-[88px] xl:pb-[100px]">
      <div className="absolute left-[12%] top-40 -z-10 h-2/6 w-2/6 blur-[35px] md:blur-[60px]">
        <HeroGradientAnimation />
      </div>

      <RevealWrapper className="mx-auto max-w-screen-xl px-5 text-center">
        <div>
          {/* متن اول */}
          <h1 className="text-xl font-normal leading-snug tracking-normal sm:text-4xl md:text-6xl lg:text-5xl">
            Embassy of the Republic of Korea in the Islamic Republic of Iran
          </h1>

          {/* تصویر وسط */}
          <div className="my-6 flex justify-center">
            <Image className="max-h-[68px] w-[100px]" src={logoDark} alt="logo" width={120} height={80} priority />
          </div>

          {/* متن دوم */}
          <h2 className="text-lg leading-snug tracking-normal sm:text-4xl">
            Commemorating the National Day of the Republic of Korea
          </h2>
        </div>

        <p className="mt-10 max-w-[770px] text-justify font-normal max-lg:mx-auto">
          The Embassy of the Republic of Korea in the Islamic Republic of Iran is honored to host a reception
          celebrating the National Day of the Republic of Korea. This occasion not only commemorates the founding of the
          Republic, but also honors Korea’s rich history, culture, and traditions while strengthening the bonds of
          friendship and cooperation between Korea and Iran
        </p>
      </RevealWrapper>

      <HeroAbout />
    </section>
  )
}

export default HeroV7
