import React, { useContext } from 'react'
//siderbar context
import { SidebarContext } from '../contexts/SidebarContext'
//cart context
import { CartContext } from '../contexts/CartContext'
//import icons
import { BsBag } from 'react-icons/bs'
//import Link
import { Link } from 'react-router-dom'
//import Logo
import Logo from '../assets/logo.svg'

export default function Header() {
  const { isOpen, setIsOpen } =  useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  return (
    <header className='bg-pink-200'>
      <Link to={'/'}>
        <div>
          <img src={Logo} alt="" />
        </div>
      </Link>
      {/* cart */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer flex relative max-w-[50px]'>
        <BsBag className='text-2xl'/>
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[120px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
          {itemAmount}
        </div>
      </div>
    </header>
  )
}
