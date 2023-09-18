import React from "react";
import style from "../education/education.module.css";

function Volunteering() {
  const currentRef = React.useRef(null);
  React.useEffect(() => {
    const handleScroll = () => {
      const element = currentRef.current;
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add(style.animate);
        } else {
          element.classList.remove(style.animate);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="voulnteering"
      ref={currentRef}
      className={`${style.education} ${style.animate}`}
    >
      <div
        className={style.education__container}
        style={{
          marginBottom: "0px",
        }}
      >
        <div className={style.title__container}>
          <h2 className={style.title}>
            Google Developer Student Club Al-Azhar Branch
          </h2>
        </div>
        <div>
          <ul>
            <li className={style.content}>Java Instructor and Mentor</li>
            <li className={style.content}>
              Problem Setter for contests within the team
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Volunteering;
