import React from 'react'
import './RightContentSection.css'

const RightContentSection = ({ children, variant = 'b' }) =>
  variant.lowercase === 'a' ? (
    <section className='contentSectionContainer primaryColor '>
      {children}
    </section>
  ) : (
    <section className='contentSectionContainer secondaryColor '>
      {children}
    </section>
  )

export default RightContentSection
