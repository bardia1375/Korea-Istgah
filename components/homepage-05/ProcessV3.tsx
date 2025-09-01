import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import Arrirang from '@/public/images/Arrirang.png'

const songs = [
  {
    title: 'Arirang',
    desc: '“Arirang,” a timeless Korean folk song passed down through generations, embodies love, longing, and resilience, often called the nation’s unofficial anthem and treasured as a symbol of Korea’s soul. 🎶',
  },
  {
    title: 'Golden',
    desc: '“Golden,” released in 2023 by Jungkook of BTS, shines with an energetic rhythm and bright melody, carrying a message of hope, youth, and the brilliance of life’s golden moments. ✨',
  },
  {
    title: 'Qeysar',
    desc: '“Qeysar,” composed by Esfandiar Monfaredzadeh for Masoud Kimiai’s iconic 1969 film, is a powerful and melancholic theme that immortalizes the spirit of vengeance, fate, and tragic heroism in Iranian cinema. 🎶',
  },
  { title: 'Porsoon Porsoon', desc: 'Classic Iranian melody with modern orchestration' },
  {
    title: 'APT',
    desc: '“APT,” released in 2023 by ROSÉ (BLACKPINK) and Bruno Mars, blends smooth pop with soulful vocals, capturing the warmth of love and intimacy in everyday moments. 🎶',
  },
  {
    title: 'Soda pop',
    desc: '“Soda Pop,” performed by the fictional Saja Boys in K-Pop: Demon Hunters (2025), was written by Vince, Kush, and Danny Chung and produced by 24, Dominsuk, and Ian Eisendrath. With its bright, catchy pop sound, the song hides a darker twist, symbolizing deceptive sweetness that masks danger. 🎶',
  },
  { title: 'Gole goldoon', desc: 'Traditional Iranian folk reimagined for orchestra' },
  {
    title: 'Dynamite',
    desc: '“Dynamite,” released in 2020 by BTS, is a vibrant disco-pop anthem whose upbeat energy and joyful spirit spread hope and positivity worldwide. 🎶',
  },
  {
    title: 'Shut down',
    desc: '“Shut Down,” released in 2022 by BLACKPINK, fuses hip-hop beats with classical strings, delivering a bold anthem of power, confidence, and unapologetic dominance. 🎶',
  },
  {
    title: 'Stay with me',
    desc: '“Stay With Me,” released in 2016 by Chanyeol (EXO) and Punch for the drama Goblin, is a heartfelt ballad whose haunting melody and tender vocals capture love, longing, and destiny. 🎶',
  },
  { title: 'Jane maryam', desc: 'Persian romantic piece with nostalgic notes' },
  {
    title: 'Beautiful korea',
    desc: '“Beautiful Korea,” composed and performed by the traditional-modern ensemble SOREA, is a proud musical ode that elevates Korean culture and unity, so meaningful that it was chosen for inclusion in South Korean junior high music textbooks.',
  },
  {
    title: 'Oh na ra',
    desc: '“Oh Na Ra,” composed by Hwang Jin-young for the drama Dae Jang  Geum (2003), is a traditional-style Korean song that blends courtly elegance with folk charm, symbolizing cultural pride and timeless beauty. 🎶',
  },
]

const ProcessV3 = () => {
  return (
    <section className="pb-10 pt-6 md:pb-12 md:pt-8">
      <div className="container">
        {/* Grid */}
        <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
          {songs.map((song, idx) => (
            <div key={idx} className="reveal-me">
              <article
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 shadow-sm backdrop-blur-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/60 hover:-translate-y-1 hover:shadow-xl dark:bg-white/5"
                tabIndex={0}
                role="button">
                {/* {song.image ? (
                  <img
                    src={song.image}
                    alt={song.title}
                    className="h-28 w-full rounded-t-2xl bg-white object-contain"
                  />
                ) : (
                  <div className="h-28 w-full rounded-t-2xl bg-gradient-to-tr from-[#0047A0]/20 to-[#CD2E3A]/20" />
                )} */}

                <div className="p-6">
                  {/* شماره آیتم */}
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#0047A0] to-[#CD2E3A] text-sm font-semibold text-white shadow-md ring-2"
                    aria-label={`#${idx + 1}`}>
                    {idx + 1}
                  </div>

                  {/* عنوان */}
                  <h5 className="text-lg font-semibold tracking-tight text-secondary dark:text-white md:text-xl">
                    {song.title}
                  </h5>

                  {/* توضیح */}
                  <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-white/70">{song.desc}</p>

                  {/* دکمه/لینک */}
                  {/* <div className="mt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-all group-hover:gap-2.5 dark:text-indigo-400">
                      View details
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div> */}
                </div>

                {/* حاشیه‌ی محو */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
                />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessV3
