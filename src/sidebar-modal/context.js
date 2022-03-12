import React, { useState, useContext } from 'react'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const openSideBar = () => setIsSideBarOpen(true)
  const closeSideBar = () => setIsSideBarOpen(false)
  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isModalOpen,
        openModal,
        openSideBar,
        closeModal,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)
export { AppContext, AppProvider }
