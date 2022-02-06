import React from 'react'
import './Title.css'

const Title = ({ children, link = false, linkHref, linkAlt }) =>
  link ? (
    <a className='title' href={linkHref} alt={linkAlt}></a>
  ) : (
    <div className='title'>{children}</div>
  )

export default Title
