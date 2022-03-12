import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext()

  return (
    <main>
      <button className='bar' onClick={openSideBar}>
        <FaBars />
      </button>
      <div className='modal'>
        <button className='modal-btn' onClick={openModal}>
          Show Modal
        </button>
      </div>
    </main>
  )
}

export default Home
