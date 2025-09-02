'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const MARQUEE_IMAGES = [
  { id: 1, src: '/images/1156in1477-/1.webp' },
  { id: 2, src: '/images/1156in1477-/2.webp' },
  { id: 3, src: '/images/1156in1477-/3.webp' },
  // { id: 4, src: '/images/1156in1477-/golden-min.webp' },
  { id: 4, src: '/images/1156in1477-/5.webp' },
  { id: 5, src: '/images/1156in1477-/6.webp' },
]

const SkewMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<gsap.core.Tween | null>(null)

  useGSAP(
    () => {
      const container = containerRef.current!
      const track = marqueeRef.current!

      // 1) محتوا را دو برابر کن تا لوپ نرم شود
      //    (duplicate DOM children instead of duplicating data)
      const clones: HTMLElement[] = []
      Array.from(track.children).forEach((child) => {
        const clone = child.cloneNode(true) as HTMLElement
        clone.setAttribute('aria-hidden', 'true')
        track.appendChild(clone)
        clones.push(clone)
      })

      // نکته: چون عرض Image معلوم است (width prop)، scrollWidth قابل اعتماد است
      const halfWidth = track.scrollWidth / 2

      // 2) انیمیشن بدون پرش + wrap
      animRef.current = gsap.to(track, {
        x: `-=${halfWidth}`, // حرکت به اندازه‌ی نصف کل طول (چون دو کپی داریم)
        duration: (halfWidth / 200) * 2, // سرعت: هر 100px ≈ 2s (قابل تغییر)
        ease: 'none',
        repeat: -1,
        force3D: true,
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-halfWidth, 0)), // wrap در بازه [-halfWidth,0]
        },
      })

      // 3) ورودی اولیه با اسکرول (تنها یک بار)
      gsap.from(container, {
        scrollTrigger: {
          trigger: container,
          // start/end را بسته به صفحه‌ات تنظیم کن
          start: 'top 90%',
          end: 'top 50%',
          scrub: false,
          once: true,
        },
        y: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })

      // پاکسازی
      return () => {
        animRef.current?.kill()
        // حذف کلون‌ها (اختیاری)
        clones.forEach((c) => c.remove())
      }
    },
    { scope: containerRef },
  )

  // 4) توقف/ادامه با کلیک روی هر تصویر
  const handleToggle = () => {
    if (!animRef.current) return
    animRef.current.paused(!animRef.current.paused())
  }

  return (
    <section className="relative w-full pb-16 pt-24 lg:pb-48">
      <div
        ref={containerRef}
        style={{
          transform:
            'translate3d(-200px, 0px, 0px) scale3d(1, 1, 1) rotateX(30deg) rotateY(17deg) rotateZ(342deg) skew(7deg, 359deg)',
          transformStyle: 'preserve-3d',
        }}>
        <div ref={marqueeRef} className="flex cursor-pointer flex-nowrap gap-5">
          {MARQUEE_IMAGES.map((img) => (
            <figure
              key={img.id}
              className="marquee-part z-50 flex flex-shrink-0 items-center justify-center"
              onClick={handleToggle}
              title="Click to pause/resume">
              <Image
                width={370}
                height={400}
                src={img.src}
                alt={`Marquee ${img.id}`}
                // برای بنری و کم‌ارتفاع اگر بخواهی:
                // className="h-28 w-[370px] object-contain bg-white rounded-md"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkewMarquee
