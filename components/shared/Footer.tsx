import footerData from '@/data/footer.json'
import arrowIcon from '@/public/images/icons/arrow-Icon.svg'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import FooterProvider from './FooterProvider'

const Footer = () => {
  return (
    <FooterProvider>
      <div className="w-full bg-gradient-to-r from-blue-900/90 to-black py-4 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="mr-3 h-4 w-4 animate-pulse rounded-full bg-yellow-400"></div>
            <div className="relative overflow-hidden">
              <p className="rounded-md border-l-4 border-yellow-400 bg-white/10 px-4 py-1 text-lg font-medium text-white backdrop-blur-sm">
                © 2025 <Link href="https://istgahmusical.com">Istgah Institute</Link>. All rights reserved.
              </p>
              <div className="z-5 animate-shine absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-20"></div>
            </div>
            <div className="ml-3 h-4 w-4 animate-pulse rounded-full bg-yellow-400"></div>
          </div>
        </div>
      </div>
    </FooterProvider>
  )
}

export default Footer
