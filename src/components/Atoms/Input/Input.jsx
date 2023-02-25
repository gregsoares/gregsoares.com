import React from 'react'

const Input = ({ name, placeholder, type = 'text', ref, inputCompleted }) => {
  function isTextarea() {
    const inputType = type.toLowerCase()
    if (inputType === 'textarea') {
      return true
    }
    return false
  }

  function handleChange(e) {
    e.value
      ? inputCompleted({ name: e.name, value: true })
      : inputCompleted({ name: e.name, value: false })
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
      onChange={e => handleChange({ value: e.currentTarget.value, name: name })}
    />
  ) : (
    <input
      className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
      name={name}
      placeholder={placeholder}
      ref={ref}
      type={type}
      onChange={e => handleChange({ value: e.currentTarget.value, name: name })}
    />
  )
}

export default Input
