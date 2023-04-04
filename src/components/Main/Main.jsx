import React from 'react'
import MenuItems from '../MenuItems/MenuItems'
import Buttons from '../Buttons/Buttons'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import Search from '../Search/Search'
import './main.css'

const Main = () => {
  return (
    <main className='main'>
      <GoogleIcon />
      <Search />
      <div className="btns">
        <Buttons text="Google Search" />
        <Buttons text="I'm Feeling Lucky" />
      </div>
      <div className="languages">
        <p>Google offered in: </p>
        <MenuItems text='Hausa' />
        <MenuItems text='Akan' />
        <MenuItems text='Ewe' />
        <MenuItems text='Ga' />
      </div>
    </main>
  )
}

export default Main
