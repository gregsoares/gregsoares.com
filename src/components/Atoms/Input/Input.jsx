import React from 'react'

const Input = ({ name, placeholder, type = 'text', ref }) => {
  function isTextarea() {
    const inputType = type.toLowerCase()
    if (inputType === 'textarea') {
      return true
    }
    return false
  }

  return isTextarea() ? (
    <textarea
      className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
      name={name}
      placeholder={placeholder}
      rows='5'
      cols='80'
      ref={ref}
      type={type}
    />
  ) : (
    <input
      className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
      name={name}
      placeholder={placeholder}
      ref={ref}
      type={type}
      // onChange={e => setItem({ title: e.target.value })}
    />
  )
}

export default Input
