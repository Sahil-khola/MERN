import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
       <header className={style.header}>
        <div className="logo">
          <img src="" alt="" />
          <h1>WizardZ</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Use Cases</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Request a quote</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
