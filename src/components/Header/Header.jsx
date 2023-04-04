import React from 'react'
import MenuItems from '../MenuItems/MenuItems'
import appIcon from '../../images/apps.png'
import avatar from '../../images/unnamed.png'
import './header.css'

const Header = () => {
  return (
    <header>
        <nav>
          <MenuItems text='Gmail' />
          <MenuItems text='Images' />
          <img src={appIcon} alt="" className='app-icon' />
          <img src={avatar} alt="" className='avatar' />
        </nav>
    </header>
  )
}

export default Header