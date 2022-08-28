import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavMenu from './NavMenu'

const TopNav = () => {
  const windowWidth = window.innerWidth > 1023 ? 'desktop' : 'mobile'
  const [isOpen, setIsOpen] = useState(false)
  const displayNavLinks = () => {
    if (windowWidth === 'mobile' && isOpen) {
      return true
    } else if (windowWidth === 'desktop') {
      return true
    }
    return false
  }
  console.log('isOpen', isOpen)

  return (
    <div
      className='text-white top-0 absolute z-50 w-full flex flex-wrap items-center px-2 py-3 navbar-expand-lg h-24 '
      data-testid='topnav-container'
    >
      <div className='w-full px-4'>
        <nav className='relative flex flex-wrap items-center py-3 navbar-expand-lg rounded'>
          <div className='container px-2 mx-auto flex flex-wrap items-center justify-between'>
            <div className='w-full relative flex justify-between px-4 lg:static lg:flex '>
              <Link
                className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase '
                to='/'
              >
                GregSoares.com
              </Link>

              <div className=' inline-block h-12'>
                <div className='container mx-8'>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='cursor-pointer text-xl leading-none px-3 py-3 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                    type='button'
                  >
                    <span className='block relative w-6 h-px rounded-sm bg-white'></span>
                    <span className='block relative w-6 h-px rounded-sm bg-white mt-1'></span>
                    <span className='block relative w-6 h-px rounded-sm bg-white mt-1'></span>
                  </button>
                </div>
                {displayNavLinks() && <NavMenu />}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default TopNav
