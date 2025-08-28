'use client'
import userImg1 from '@/public/images/370in370/The Jongmyo Jerye.webp'
import userImg2 from '@/public/images/370in370/The Hanbok.webp'
import userImg3 from '@/public/images/370in370/Pansori.webp'
import userImg4 from '@/public/images/370in370/Hunminjeongeum1.webp'

import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperSlideContent from './SwiperSlideContent'

const userFeedback = [
  {
    id: 1,
    feedback:
      'The Jongmyo Jerye, Korea’s oldest Confucian royal ancestral ritual established in 1392, is solemnly observed each year in Seoul. Accompanied by orchestral music (Jerye-ak) and traditional dances (munmu and mumu), it honors the kings and queens of the Joseon dynasty, preserving its authentic form for more than five centuries as a distinguished synthesis of ritual, music, and art.',
    name: 'Culture',
    position: 'The Jongmyo Jerye',
    img: userImg1,
  },

  {
    id: 2,
    feedback:
      'The Hanbok, Korea’s traditional attire, traces its origins to the Three Kingdoms period (Goguryeo, Baekje, and Silla) and reached its refinement during the Goryeo and Joseon dynasties. With a history spanning over a millennium, it embodies dignity, simplicity, and the cultural identity of the Korean people, and continues to hold an honored place in national ceremonies and traditional celebrations.',
    name: 'Culture',
    position: 'The Hanbok',
    img: userImg2,
  },
  {
    id: 3,
    feedback:
      'Pansori, a traditional Korean art form established in the 18th century, is an epic musical storytelling genre where a vocalist, accompanied by a drummer, unites song (sori), gestures (ballim), and narrative (aniri) to dramatize folk tales and historic events—an enduring performance tradition that continues to captivate audiences.',
    name: 'Culture',
    position: 'Pansori',
    img: userImg3,
  },
  {
    id: 4,
    feedback:
      'Hunminjeongeum, the Korean alphabet created by King Sejong in 1446, was designed based on vocal organs and explained in the Haeryebon; it opened literacy to all people, including women and lower classes, and while it originally had 28 letters, 24 remain in use today, with the manuscript registered by UNESCO as a Memory of the World.',
    name: 'Culture',
    position: 'Hunminjeongeum',
    img: userImg4,
  },
]

const TestimonialV5 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container relative">
        <h2 className="text-appear mb-9 text-center font-semibold md:mb-14">Culture & Traditions</h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          loop
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          speed={1500}
          allowTouchMove
          autoplay={{
            delay: 3700,
            disableOnInteraction: false,
          }}>
          {userFeedback.map(({ id, feedback, name, position, img }) => (
            <SwiperSlide key={id}>
              <SwiperSlideContent feedback={feedback} name={name} position={position} img={img} />
            </SwiperSlide>
          ))}
          <div className="absolute bottom-[0px] right-[15%] z-50">
            <div className="flex items-center space-x-2">
              <button className="swiper-button-prev border bg-backgroundBody p-1.5 duration-300 hover:bg-primary active:bg-primary dark:bg-secondary md:p-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path
                    d="M12.9417 16.5621C12.9998 16.6201 13.0458 16.6891 13.0773 16.7649C13.1087 16.8408 13.1249 16.9221 13.1249 17.0043C13.1249 17.0864 13.1087 17.1677 13.0773 17.2436C13.0458 17.3194 12.9998 17.3884 12.9417 17.4464C12.8836 17.5045 12.8147 17.5506 12.7388 17.582C12.663 17.6134 12.5816 17.6296 12.4995 17.6296C12.4174 17.6296 12.3361 17.6134 12.2602 17.582C12.1843 17.5506 12.1154 17.5045 12.0573 17.4464L5.80733 11.1964C5.74922 11.1384 5.70312 11.0695 5.67167 10.9936C5.64021 10.9177 5.62402 10.8364 5.62402 10.7543C5.62402 10.6721 5.64021 10.5908 5.67167 10.5149C5.70312 10.439 5.74922 10.3701 5.80733 10.3121L12.0573 4.06207C12.1746 3.94479 12.3337 3.87891 12.4995 3.87891C12.6654 3.87891 12.8244 3.94479 12.9417 4.06207C13.059 4.17934 13.1249 4.3384 13.1249 4.50425C13.1249 4.67011 13.059 4.82917 12.9417 4.94644L7.13311 10.7543L12.9417 16.5621Z"
                    className="fill-secondary dark:fill-backgroundBody"
                  />
                </svg>
              </button>
              <button className="swiper-button-next border bg-backgroundBody p-1.5 duration-300 hover:bg-primary active:bg-primary dark:bg-secondary md:p-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path
                    d="M14.1925 11.1964L7.94254 17.4464C7.88447 17.5045 7.81553 17.5506 7.73966 17.582C7.66379 17.6134 7.58247 17.6296 7.50035 17.6296C7.41823 17.6296 7.33691 17.6134 7.26104 17.582C7.18517 17.5506 7.11623 17.5045 7.05816 17.4464C7.00009 17.3884 6.95403 17.3194 6.9226 17.2436C6.89117 17.1677 6.875 17.0864 6.875 17.0043C6.875 16.9221 6.89117 16.8408 6.9226 16.7649C6.95403 16.6891 7.00009 16.6201 7.05816 16.5621L12.8668 10.7543L7.05816 4.94644C6.94088 4.82917 6.875 4.67011 6.875 4.50425C6.875 4.3384 6.94088 4.17934 7.05816 4.06207C7.17544 3.94479 7.3345 3.87891 7.50035 3.87891C7.6662 3.87891 7.82526 3.94479 7.94254 4.06207L14.1925 10.3121C14.2506 10.3701 14.2967 10.439 14.3282 10.5149C14.3597 10.5908 14.3758 10.6721 14.3758 10.7543C14.3758 10.8364 14.3597 10.9177 14.3282 10.9936C14.2967 11.0695 14.2506 11.1384 14.1925 11.1964Z"
                    className="fill-secondary dark:fill-backgroundBody"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default TestimonialV5
