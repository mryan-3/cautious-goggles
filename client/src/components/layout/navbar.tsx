import Link from 'next/link'
import MobileNav from './mobile-nav'
import Image from 'next/image'
import NavItems from './nav-items'

export const Navbar = () => {
  return (
    <div className='flex justify-between  items-center text-primary w-full bg-transparent'>
      <nav className='fixed backdrop-blur-sm z-50 left-0 right-0 top-0 hidden md:flex w-full bg-transparent items-center justify-between p-2 px-8 text-primary'>
        <Link href='/' className='flex justify-between items-center gap-1'>
          <Image
            src='/logo.png'
            width={40}
            height={40}
            alt='logo'
            className='p-2'
          />
          <h1 className='text-xl lg:text-3xl hover:text-hover font-bold tracking-wider'>
            Buildr{' '}
          </h1>
        </Link>

        <div>
          <NavItems />
        </div>
      </nav>
      <div className='flex w-full justify-between items-center px-2 md:hidden'>
        <Link href='/' className='flex justify-between items-center gap-1'>
          <Image
            src='/logo.png'
            width={40}
            height={40}
            alt='logo'
            className='p-2'
          />
          <h1 className='text-xl font-bold tracking-wider'>
            Buildr{' '}
          </h1>
        </Link>
        <MobileNav />
      </div>
    </div>
  )
}
