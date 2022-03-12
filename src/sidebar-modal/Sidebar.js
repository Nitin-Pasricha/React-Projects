import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { links, social } from './data'
import { useGlobalContext } from './context'
const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext()
  return (
    <aside className={`${isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='header'>
        <h2>
          @nitin<span style={{ color: 'red' }}>pasricha</span>
        </h2>
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-links'>
        {social.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default Sidebar
