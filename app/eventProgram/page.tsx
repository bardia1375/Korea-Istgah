import RevealWrapper from '@/components/animation/RevealWrapper'
import BlogPostV7 from '@/components/homepage-12/BlogPostV7'
import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import React from 'react'
const blogPosts = getMarkDownData('data/ai-solutions/blog')

function page() {
  return (
    <RevealWrapper className="mt-4 flex flex-col justify-center overflow-hidden sm:flex-row">
      <BlogPostV7 posts={blogPosts} />
      <Link
        href={'/'}
        className="tab-button active border-y border-l text-center text-base font-medium uppercase leading-[1.1] tracking-[1.12px] dark:border-transparent dark:bg-backgroundBody/90 dark:text-secondary max-md:px-10 max-md:py-5 md:px-16 md:py-8">
        Back To HomePage
      </Link>
    </RevealWrapper>
  )
}

export default page
