import React from "react";
import style from "./header.module.css";
import Contacts from "../contacts/Contacts";
import IconsContacts from "../contacts/IconsContacts";
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return windowWidth;
};
function Header() {
  const windowWidth = useWindowWidth();
  return (
    <div id="header" className={style.box}>
      <div className={style.box__inner}>
        <div className={style.img__container}>
          <img
            className={`${style.responsive__image} ${style.img__media}`}
            src="https://i.postimg.cc/Qx44Vph8/profile-2.png"
            alt="Portofilio"
            border="0"
          />
          <div className={style.content__container}>
            <div className={style.img__flex}>
              <img
                className={style.responsive__image}
                src="https://readme-typing-svg.demolab.com?font=Bebas+Neue&size=40&pause=1000&color=0E2271B8&center=true&vCenter=true&width=650&height=80&lines=Hi+there+i'm+Ahmed+El-Zahaby+%F0%9F%91%8B;SDE%2C+Technical+Lead+and+PM+%40+bld.ai;Django+Developer+%7C+React.js+Developer;Develop+awesome+websites+with+great+function;Fond+of+Problem+Solving;Ranked+4th+on+Egypt+at+IEEEXTREME;Specialist+at+Codeforces"
                alt="Typing SVG"
              />
            </div>
            {windowWidth > 870 ? <Contacts /> : <IconsContacts />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
