import React, { useContext } from 'react'
//siderbar context
import { SidebarContext } from '../contexts/SidebarContext'
//import icons
import { BsBag } from 'react-icons/bs'

export default function Header() {
  const { isOpen, setIsOpen } =  useContext(SidebarContext)
  return (
    <div>
      <div className='bg-pink-200'>Header</div>
      <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative '>
        <BsBag className='text-2xl'/>
      </div>
    </div>
  )
}
