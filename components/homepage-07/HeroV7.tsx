import RevealWrapper from '../animation/RevealWrapper'
import CtaImageSlider from '../shared/CtaImageSlider'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import SkewMarquee from '../shared/SkewMarquee'
import HeroAbout from './HeroAbout'

const HeroV7 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 max-sm:px-3 md:pb-16 md:pt-44 lg:pb-[88px] xl:pb-[100px]">
      <div className="absolute left-[12%] top-40 -z-10 h-2/6 w-2/6 blur-[35px] md:blur-[60px]">
        <HeroGradientAnimation />
      </div>

      <RevealWrapper className="mx-auto max-w-screen-xl px-5">
        <div>
          <h1 className="text-2xl font-normal leading-snug tracking-normal max-lg:text-center sm:text-4xl sm:leading-tight sm:tracking-tight md:text-6xl md:leading-[1.2] md:tracking-[-1px] lg:text-7xl lg:leading-[1.25] lg:tracking-[-2px] xl:text-[96px] xl:leading-[1.3] xl:tracking-[-2.88px]">
            Republic of Korea National Day
            <CtaImageSlider
              slides={[
                { id: '1', img: '/images/500in200-/3.webp' },
                // { id: '2', img: '/images/500in200-/4.webp' },
              ]}
            />
            Honoring the National Day of the Republic of Korea{' '}
          </h1>
        </div>

        <p className="mt-10 max-w-[770px] font-normal max-lg:mx-auto">
          Join us in celebrating the vibrant culture, heritage, and friendship between Korea and our community. This
          special event honors the shared values, traditions, and the strong bonds that connect us.
        </p>
      </RevealWrapper>

      <SkewMarquee />

      <HeroAbout />
    </section>
  )
}

export default HeroV7
