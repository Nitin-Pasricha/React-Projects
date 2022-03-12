import React from 'react'
import Sidebar from './Sidebar'
import Modal from './Modal'
import Home from './Home'
import './styles.css'
import { AppProvider } from './context'

const Sidebar_modal = () => {
  return (
    <AppProvider>
      <Home />
      <Sidebar />
      <Modal />
    </AppProvider>
  )
}
export default Sidebar_modal
