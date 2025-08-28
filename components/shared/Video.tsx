'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import RevealWrapperV2 from '../animation/RevealWrapperV2'
import Image from 'next/image'
import hero01 from '@/public/images/699in420/699in420.webp'

gsap.registerPlugin(ScrollTrigger)

const Video = () => {
  const videoRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Reset GSAP animations when route changes
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [pathname])

  useGSAP(() => {
    const videoElement = videoRef.current

    const animation = gsap.fromTo(
      videoElement,
      {
        scale: 0.4,
        opacity: 0.6,
      },
      {
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.video-section',
          start: 'top 80%',
          end: 'top 0%',
          scrub: 1,
        },
      },
    )

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="video-section">
      <div ref={videoRef} className="h-fit w-full origin-top scale-50">
            <RevealWrapperV2 as="figure" className="reveal-me mb-8 w-full">
              <Image src={hero01} alt="Hero Img 01" className="w-full" />
            </RevealWrapperV2>
        {/* <video className="h-full w-full" autoPlay muted loop playsInline>
          <source src="/video/Istgahkorea.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </section>
  )
}

export default Video
