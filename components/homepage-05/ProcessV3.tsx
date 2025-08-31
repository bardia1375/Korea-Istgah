import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const songs = [
  { title: 'Arirang', desc: 'Dive deep into your market, understand your' },
  { title: 'Golden', desc: 'Golden is a popular hit loved worldwide' },
  { title: 'Gheisar', desc: 'Inspired by Iranian cinema, cultural fusion track' },
  { title: 'Porsoon Porsoon', desc: 'Classic Iranian melody with modern orchestration' },
  { title: 'APT', desc: 'K-pop anthem that resonates with youth' },
  { title: 'Soda pop', desc: 'Refreshing upbeat track with funky vibes' },
  { title: 'Gole goldoon', desc: 'Traditional Iranian folk reimagined for orchestra' },
  { title: 'Dynamite', desc: 'Global BTS hit with explosive energy' },
  { title: 'Shut down', desc: 'Blending rap and strings in a bold style' },
  { title: 'Stay with me', desc: 'Emotional ballad known from K-dramas' },
  { title: 'Jane maryam', desc: 'Persian romantic piece with nostalgic notes' },
  { title: 'Beautiful korea', desc: 'Celebrating Korea’s beauty in song' },
  { title: 'Oh na ra', desc: 'Traditional Korean chant full of spirit' },
]

const ProcessV3 = () => {
  return (
    <section className="pb-10 pt-6 md:pb-12 md:pt-8">
      <div className="container">
        {/* Heading (اختیاری) */}
        {/* 
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
            Our Song Selections
          </h2>
          <p className="mt-2 text-sm md:text-base text-secondary/70 dark:text-white/60">
            A curated blend of Iranian classics and Korean hits
          </p>
        </div> 
        */}

        {/* Grid */}
        <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
          {songs.map((song, idx) => (
            <div key={idx} className="reveal-me">
              <article
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/60 hover:-translate-y-1 hover:shadow-xl dark:bg-white/5"
                tabIndex={0}
                role="button">
                {/* تزئینی: لکه‌ی گرادیانی گوشه کارت */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-400/30 via-indigo-400/20 to-cyan-400/20 opacity-75 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* شماره آیتم */}
{/* شماره آیتم */}
<div
  className="
    mb-4 inline-flex h-10 w-10 items-center justify-center
    rounded-full 
    bg-gradient-to-tr from-[#0047A0] to-[#CD2E3A]    /* قرمز → آبی */
    text-white text-sm font-semibold
    shadow-md ring-2 
  "
  aria-label={`#${idx + 1}`}
>
  {idx + 1}
</div>

                {/* عنوان */}
                <h5 className="text-lg font-semibold tracking-tight text-secondary dark:text-white md:text-xl">
                  {song.title}
                </h5>

                {/* توضیح */}
                <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-white/70">{song.desc}</p>

                {/* دکمه/لینک اختیاری پایین کارت */}
                <div className="mt-5">
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
                </div>

                {/* حاشیه‌ی محو هنگام هاور */}
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
