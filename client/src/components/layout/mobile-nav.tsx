import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import NavItems from './nav-items'
import { Menu } from 'lucide-react'

const MobileNav = () => {
  return (
    <nav className='md:hidden '>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <Menu className='h-6 w-6' />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
          <Image src='/logo.png' alt='logo' width={60} height={60} />
          <Separator className='border border-[#e6f2f8]' />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
export default MobileNav
