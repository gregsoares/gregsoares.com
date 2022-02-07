import React from 'react'
import './LeftContentSection.css'

const LeftContentSection = ({ children, variant = 'b' }) =>
  variant.lowercase === 'a' ? (
    <section className='contentSectionContainer primaryColor '>
      {children}
    </section>
  ) : (
    <section className='contentSectionContainer secondaryColor '>
      {children}
    </section>
  )

export default LeftContentSection
