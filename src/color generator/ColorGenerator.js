import { useState, useEffect } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'
import './color.css'

const ColorGenerator = () => {
  const [hexCode, setHexCode] = useState('#f15025')
  const [isError, setIsError] = useState(false)
  const [tintsNShades, setTintsNShades] = useState([])

  const generator = () => {
    try {
      if (hexCode.length < 7)
        throw new Error('Error:hexcode should be of 6 digits')
      setIsError(false)
      const color = new Values(hexCode)
      setTintsNShades(color.all(10))
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
  }
  useEffect(() => {
    generator()
  }, [])
  const submitHandler = (e) => {
    e.preventDefault()
    generator()
  }

  return (
    <>
      <header>
        <h3>Color Generator</h3>
        <form onSubmit={submitHandler}>
          <input
            className={isError ? 'red' : null}
            type='text'
            value={hexCode}
            onChange={(e) => setHexCode(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      </header>
      <section className='color-container'>
        {tintsNShades.length > 0 &&
          tintsNShades.map((tintOrShade, index) => {
            //console.log(index, tintOrShade.rgb)
            let hexColor = '#' + tintOrShade.hex
            return (
              <SingleColor
                key={index}
                index={index}
                {...tintOrShade}
                hex={hexColor}
              />
            )
          })}
      </section>
    </>
  )
}

export default ColorGenerator
