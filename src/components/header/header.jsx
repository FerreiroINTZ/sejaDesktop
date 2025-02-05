import React from 'react'
import './header.css'
import logo from '../../imgs/desktop-logo.svg'
import menu_icon from '../../imgs/menu-aberto.png'

function header() {
  return (
    <header id="header">
      <div id="logo-img-container">
        <img src={logo} alt="logo da Desktop" />
      </div>
      <div id="menu-img-container">
        <img src={menu_icon} alt="logo da Desktop" />
      </div>
    </header>
  )
}

export default header