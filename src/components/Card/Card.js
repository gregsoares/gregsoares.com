import React from 'react'

import './Card.css'
const Card = ({ icon, title, text, linkHref = null }) => {
  return (
    <article className='cardContainer'>
      <a href={linkHref} className='cardIcon cardLink'>
        {icon}
      </a>
      {linkHref ? (
        <a href={linkHref} className='cardLink'>
          <h3 className='cardTitle'>{title}</h3>
        </a>
      ) : (
        <h3 className='cardTitle'>{title}</h3>
      )}
      <p className='cardText'>{text}</p>
    </article>
  )
}

export default Card
