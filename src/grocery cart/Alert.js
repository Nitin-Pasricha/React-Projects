import React, { useEffect } from 'react'
const Alert = ({ show, msg, action, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])
  return <small className={`alert ${action}`}>{msg}</small>
}
export default Alert
