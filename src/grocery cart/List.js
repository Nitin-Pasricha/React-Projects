import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
const List = ({ items, btnHandler, delItem, editItem }) => {
  return (
    <article className='list'>
      {items.map((item, index) => {
        return (
          <article className='list-item' key={index}>
            <p>{item.item}</p>
            <div className='btn-container'>
              <button className='btn edit' onClick={() => editItem(item.id)}>
                <FaEdit />
              </button>
              <button className='btn delete' onClick={() => delItem(item.id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
      <button className='clr btn' onClick={btnHandler}>
        Clear Items
      </button>
    </article>
  )
}

export default List
