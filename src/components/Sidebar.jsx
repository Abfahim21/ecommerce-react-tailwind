import React, { useContext } from 'react'
//import link
import { Link } from 'react-router-dom'
//import icons
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
//import components
import CartItem from '../components/CartItem'
//import siderbar context
import { SidebarContext } from '../contexts/SidebarContext'
//import cart context
import { CartContext } from '../contexts/CartContext'

export default function Sidebar() {
  const {isOpen, handleClose} = useContext(SidebarContext);
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'}  w-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex justify-center items-center py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Shopping Bag(0)
          </div>
          {/* icons */}
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
    </div>
  )
}
