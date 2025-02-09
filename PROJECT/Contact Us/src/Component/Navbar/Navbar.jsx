import React from 'react'
import style from "./Navbar.module.css"

const NavbarComponent = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.logoContainer}>
        <img className={style.logo} src="/images/logo.png" alt=" do Some coding logo" />
      </div>
      <div className={style.menuContainer}>
        <ul className={style.menu}>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent
