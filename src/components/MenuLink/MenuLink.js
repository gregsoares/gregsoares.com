import React from 'react'

import './MenuLink.css'

const MenuLink = ({ text, link }) => {
  return (
    <a className='menuLink' href={link}>
      {text}
    </a>
  )
}

export default MenuLink
