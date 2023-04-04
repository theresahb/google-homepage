import React from 'react'
import MenuItems from '../MenuItems/MenuItems'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="location">
                <p>Ghana</p>
            </div>
            <div className="footer-links">
                <ul className="links">
                    <MenuItems text='About' />
                    <MenuItems text='Advertising' />
                    <MenuItems text='Business' />
                    <MenuItems text='How Search Works' />
                </ul>
                <ul className="links">
                    <MenuItems text='Privacy' />
                    <MenuItems text='Terms' />
                    <MenuItems text='Settings' />
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
