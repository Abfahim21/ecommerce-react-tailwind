import React, { createContext, useState } from 'react';
//create context
export const SidebarContext = createContext()

const SidebarProvider = ({children}) => {
  //siderbar status
  const [ isOpen, setIsOpen ] = useState(false)

  const handleCLose = () =>{
    setIsOpen(false) 
  }
  return (
  <SidebarContext.Provider value={ {isOpen, setIsOpen, handleCLose} }>
    {children}
  </SidebarContext.Provider>
  )
};

export default SidebarProvider;