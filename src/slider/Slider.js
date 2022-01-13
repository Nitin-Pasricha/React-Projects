import React, { useState, useEffect } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md'
import data from './data'
import './slider.css'

const Slider = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1)
    } else if (index > people.length - 1) {
      setIndex(0)
    }
  }, [index, people])
  useEffect(() => {
    let slider = setInterval(() => setIndex(index + 1), 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])
  return (
    <section className='reviews'>
      <h2 className='title'>
        <span>/ </span>
        Reviews
      </h2>
      <div className='container'>
        {people.map((person, personIndex) => {
          let position = `next-class`
          if (personIndex === index) {
            position = `active-class`
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'last-class'
          }
          return (
            <article className={position} key={person.id}>
              <div className='img-container'>
                <img src={person.image} alt={person.name} />
              </div>
              <h3>{person.name}</h3>
              <p className='designation'>{person.title}</p>
              <p className='quote'>{person.quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button
          className='prev'
          onClick={() => {
            setIndex(index - 1)
          }}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <button
          className='right'
          onClick={() => {
            setIndex(index + 1)
          }}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </section>
  )
}
export default Slider
