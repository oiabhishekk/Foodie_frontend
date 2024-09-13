import React, { useState } from 'react'
import './Navbar.css'
import { assets } from './../../assets/assets';

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.Demzzi} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setActive("home")} className={active === 'home' ? 'active' : ''} >home</li>
        <li onClick={() => setActive("menu")} className={active === 'menu' ? 'active' : ''} >menu</li>
        <li onClick={() => setActive("mobile app")} className={active === 'mobile app' ? 'active' : ''}>mobile app</li>
        <li onClick={() => setActive("contact us")} className={active === 'contact us' ? 'active' : ''}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar