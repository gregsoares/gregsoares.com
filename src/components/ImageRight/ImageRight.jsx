import React from 'react'

const ImageRight = () => {
  return (
    <div className='flex flex-wrap items-center py-24 bg-gray-200'>
      <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
        <div className='text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500'>
          <i className='fas fa-user-friends text-xl'></i>
        </div>
        <h3 className='text-3xl mb-2 font-semibold leading-normal'>
          From the Ground Up
        </h3>
        <p className='text-lg font-light leading-relaxed my-4 text-gray-600'>
          One
        </p>
        <p className='text-lg font-light leading-relaxed mb-4 text-gray-600'>
          Two
        </p>
        <p className='text-lg font-light leading-relaxed mb-4 text-gray-600'>
          Three
        </p>
        <p className='text-lg font-light leading-relaxed mb-4 text-gray-600'>
          Conclusion
        </p>
      </div>

      <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
        <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-500'>
          <img
            alt='young people laughing with a laptop on the table'
            src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
            className='w-full align-middle rounded-t-lg'
          />
          <blockquote className='relative p-8 mb-4'>
            <h4 className='text-xl font-bold text-white'>Top Notch Services</h4>
            <p className='text-md font-light mt-2 text-white'>
              The Arctic Ocean freezes every winter and much of the sea-ice then
              thaws every summer, and that process will continue whatever
              happens.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default ImageRight
