import { useState, useEffect } from 'react'

const SingleColor = ({ rgb, index, weight, hex }) => {
  const [isCopied, setIsCopied] = useState(false)
  const rgbColor = 'rgb(' + rgb.join() + ')'
  //console.log(rgbColor, hex, weight)
  //console.log(index)

  //copy to clipboard
  const copyHex = () => {
    navigator.clipboard.writeText(hex)
    setIsCopied(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [isCopied])
  return (
    <div
      className='color'
      style={{
        backgroundColor: `${rgbColor}`,
        color: `${index > 10 && 'white'}`,
      }}
      onClick={copyHex}
    >
      <p>{weight}%</p>
      <p>{hex}</p>
      {isCopied && <small style={{ color: 'grey' }}>COPIED TO CLIPBOARD</small>}
    </div>
  )
}

export default SingleColor
