import React from 'react'
import './ContentSection.css'

const ContentSection = ({ children, variant = 'b' }) =>
  variant.lowercase === 'a' ? (
    <section className='contentSectionContainer primaryColor '>
      {children}
    </section>
  ) : (
    <section className='contentSectionContainer secondaryColor '>
      {children}
    </section>
  )

export default ContentSection
