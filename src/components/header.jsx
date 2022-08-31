import React, { useState } from 'react'
import NavItem from './NavItem'
import NavItem2 from './NavItem2'
import Dropdown from './dropdown'
import Dropdown2 from './dropdown2'
import logo from '../assets/logo.svg'
import arrowup from '../assets/icon-arrow-up.svg'
import arrowdown from '../assets/icon-arrow-down.svg'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'
function Header() {
  const [showNav, setshowNav] = useState(false);
  return (
    <div className='navigation'>
      <div className="logo">
      <a href='#'><img src={logo} /></a>
      </div>
      <div className={showNav?'navlog':'navlog show'}>
        <img onClick={()=> setshowNav(!showNav)} className= 'close' src={close} />
        <ul className='main-nav'>
        <NavItem item = 'Features' rowup = {arrowup} rowdown = {arrowdown}><Dropdown /></NavItem>
        <NavItem2 item = 'Company' rowup = {arrowup}  rowdown = {arrowdown}><Dropdown2 /></NavItem2>
        <li><a href='#'>Careers</a></li>
        <li><a href='#'>About</a></li>
        </ul>
    <div className="reg">
      <a href='#'>Login</a>
      <a className= 'regbtn' href='#'>Register</a>
    </div>
    </div>
    <div className="menu">
      <img onClick={()=> setshowNav(!showNav)} src={menu}/>
    </div>
    </div>
  )
}

export default Header