import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div className={style.navbar}>
    <span className={style.title}>Superheroes</span>
    <NavLink
      to="/showall"
      className={style.navlink}
      activeClassName={style.activeNav}
    >
      All Superheroes
    </NavLink>
    <NavLink
      to="/addnew"
      className={style.navlink}
      activeClassName={style.activeNav}
    >
      Add new Superhero
    </NavLink>
  </div>
);

export default Navbar;
