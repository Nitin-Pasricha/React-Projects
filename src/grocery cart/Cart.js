import React, { useState, useEffect } from 'react'
import Alert from './Alert'
import List from './List'
import './cart.css'

const getLocalStorage = () => {
  let list = localStorage.getItem('grocery cart')
  if (list) return JSON.parse(localStorage.getItem('grocery cart'))
  return []
}

const Cart = () => {
  const [item, setItem] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [isAlert, setIsAlert] = useState({ show: false, msg: '', action: '' })
  const [Id, setId] = useState(null)

  const clrBtnHandler = () => {
    setList([])
    setAlert(true, 'Cart Empty', 'danger')
    setIsEditing(false)
    setItem('')
  }
  const delItem = (id) => {
    const updatedList = list.filter((listItem) => listItem.id !== id)
    setList(updatedList)
    setAlert(true, 'item deleted', 'danger')
    if (id === Id) {
      setItem('')
      setIsEditing(false)
    }
  }
  const editItem = (id) => {
    setId(id)
    const itemToUpdate = list.find((listItem) => listItem.id === id)
    setItem(itemToUpdate.item)
    setIsEditing(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!item) {
      //alert...plz enter item
      setAlert(true, 'please enter value', 'danger')
    } else if (item && isEditing) {
      //edit item
      const newList = list.map((listItem) => {
        if (listItem.id === Id) {
          setAlert(true, 'item updated', 'success')
          listItem.item = item
        }
        return listItem
      })
      console.log(newList)
      setIsEditing(false)
    } else {
      setAlert(true, 'item added', 'success')

      setList([...list, { item, id: new Date().getTime() }])
    }
    setItem('')
  }

  //setting alert
  const setAlert = (show = false, msg = '', action = '') => {
    setIsAlert({ show, msg, action })
  }

  //storing data in local storage
  useEffect(() => {
    localStorage.setItem('grocery cart', JSON.stringify(list))
  }, [list])

  return (
    <section className='container'>
      {isAlert.show && (
        <Alert {...isAlert} removeAlert={setAlert} list={list} />
      )}
      <h3>Grocery Cart</h3>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='e.g. butter'
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type='submit'>{isEditing ? 'Edit' : 'Add'}</button>
        </form>
      </div>
      {list.length > 0 && (
        <List
          items={list}
          delItem={delItem}
          btnHandler={clrBtnHandler}
          editItem={editItem}
        />
      )}
    </section>
  )
}

export default Cart
