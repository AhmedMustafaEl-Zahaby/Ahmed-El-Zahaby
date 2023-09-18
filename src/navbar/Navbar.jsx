import React from "react";
import style from "./navbar.module.css";
import IconNavLinks from "../icons nav links/IconNavLinks";

function Navbar() {
  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbar__menu}>
          <ul className={style.navbar__items}>
            <li className={style.navbar__item}>
              <a href="#header" className={style.navbar__link}>
                Header
              </a>
            </li>
            <li className={style.navbar__item}>
              <a href="#experiance" className={style.navbar__link}>
                Experience
              </a>
            </li>
            <li className={style.navbar__item}>
              <a href="#education" className={style.navbar__link}>
                Education
              </a>
            </li>
            <li className={style.navbar__item}>
              <a href="#projects" className={style.navbar__link}>
                Projects
              </a>
            </li>
            <li className={style.navbar__item}>
              <a href="#skills" className={style.navbar__link}>
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
      <IconNavLinks />
    </>
  );
}

export default Navbar;
