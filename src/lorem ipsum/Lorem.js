import { useState } from 'react'
import data from './data'
import './lorem.css'

const Lorem = () => {
  const [noOfPara, setNoOfPara] = useState(0)
  const [paragraphs, setParagraphs] = useState([])
  const [error, setError] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const lengthOfData = data.length
    let newParagraphs
    setError('')
    if (noOfPara > 0 && noOfPara <= lengthOfData) {
      newParagraphs = data.slice(0, noOfPara)
    } else if (
      noOfPara > lengthOfData &&
      noOfPara - lengthOfData > 0 &&
      noOfPara - lengthOfData < 10
    ) {
      newParagraphs = data.slice(0, noOfPara - lengthOfData)
      newParagraphs = [...newParagraphs, ...data]
    } else if (noOfPara - lengthOfData > 9) {
      setError('Error! Maximum no. of paragraphs exceeded')
    } else {
      setError('Invalid! Please enter valid no. of paragraphs')
    }
    setParagraphs(newParagraphs)
  }
  return (
    <section>
      <h2>tired of boring lorem ipsum?</h2>
      <form onSubmit={submitHandler}>
        {error !== null && <small>{error}</small>}
        <label htmlFor='para'>Paragraphs:</label>
        <input
          type='number'
          id='para'
          name='para'
          value={noOfPara}
          onChange={(e) => setNoOfPara(e.target.value)}
        />
        <button type='submit'>generate</button>
      </form>
      <article>
        {error === '' &&
          paragraphs.length > 0 &&
          paragraphs.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>
          })}
      </article>
    </section>
  )
}

export default Lorem
