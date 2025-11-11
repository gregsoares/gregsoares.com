import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div className='flex lg:flex-grow items-center' id='navMenu-container'>
      <ul className='flex flex-col lg:flex-row list-none ml-auto'>
        <li className='nav-item' id='navMenu-links'>
          <Link
            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75'
            to='/home'
          >
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75'
            to='/components'
          >
            Discover
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75'
            to='/about'
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default NavMenu
