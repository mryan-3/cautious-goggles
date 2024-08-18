import React from 'react'
import { headerLinks } from '@/constants'
import Link from 'next/link'

export default function NavItems() {
  return (
    <ul className='md:flex-between flex w-full font-bold flex-col items-start gap-12 md:gap-9 md:flex-row'>
      {headerLinks.map((link:any) => {
        return (
          <li
            key={link.label}
            className='hover:underline'
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
