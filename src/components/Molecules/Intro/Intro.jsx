import React from 'react'

const Intro = () => {
  return (
    <div
      className='relative z-0 lg:pt-16 pt-40  pb-32 flex content-center items-center justify-center min-h-screen-75'
      id='intro-container'
    >
      <div
        className='absolute top-0 w-full h-full bg-center bg-cover'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
        }}
      >
        <span
          id='blackOverlay'
          className='w-full h-full absolute opacity-75 bg-black'
        ></span>
      </div>
      <div className='container relative mx-auto mt-16'>
        <div className='items-center flex flex-wrap'>
          <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
            <div className=' text-gray-200 '>
              <h1
                className='text-white font-semibold text-5xl'
                id='intro-title'
              >
                Enjoying the Journey
              </h1>
              <p className='mt-4 text-lg' id='intro-text'>
                Solving problems and building things is what I love to do.
              </p>

              <p className='flex my-2 text-md leading-relaxed px-3'>
                JavaScript Web Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px'
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-gray-200 fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>
    </div>
  )
}

export default Intro
