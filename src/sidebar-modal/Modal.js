import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h2>Hello World...!</h2>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}
export default Modal
