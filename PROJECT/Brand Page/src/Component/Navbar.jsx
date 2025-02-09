import React from "react";
import style from '../Component/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div >
        <img src="/Images/brand_logo.png" alt="" />
      </div>
      <ul className={style.ul}>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button className={style.button}>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
