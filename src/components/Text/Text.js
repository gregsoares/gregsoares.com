import React from 'react'
import './Text.css'

const Text = ({ children, className }) => {
  return <p className={`TextContainer ${className}`}>{children}</p>
}

export default Text
