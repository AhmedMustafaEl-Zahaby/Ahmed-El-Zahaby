import React from "react";
import { Home, Work, School, Code, Build } from "@material-ui/icons";
import style from "./iconsnavlinks.module.css";

function IconNavLinks() {
  return (
    <div className={style.iconNavLinks__container}>
      <div className={style.iconNavLinks}>
        <div className={style.iconNavLinks__menu}>
          <ul className={style.iconNavLinks__items}>
            <li className={style.iconNavLinks__item}>
              <a href="#header" className={style.iconNavLinks__link}>
                <Home className={style.iconNavLinks__icon} />
              </a>
            </li>
            <li className={style.iconNavLinks__item}>
              <a href="#experiance" className={style.iconNavLinks__link}>
                <Work className={style.iconNavLinks__icon} />
              </a>
            </li>
            <li className={style.iconNavLinks__item}>
              <a href="#education" className={style.iconNavLinks__link}>
                <School className={style.iconNavLinks__icon} />
              </a>
            </li>
            <li className={style.iconNavLinks__item}>
              <a href="#projects" className={style.iconNavLinks__link}>
                <Code className={style.iconNavLinks__icon} />
              </a>
            </li>
            <li className={style.iconNavLinks__item}>
              <a href="#skills" className={style.iconNavLinks__link}>
                <Build className={style.iconNavLinks__icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IconNavLinks;
