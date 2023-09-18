import React from "react";
import style from "./education.module.css";

function Education() {
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
      id="education"
      ref={currentRef}
      className={`${style.education} ${style.animate}`}
    >
      <div className={style.title__container}>
        <h2 className={style.title}>pre-university education</h2>
        <p className={style.date}>2006 - 2018</p>
      </div>
      <div
        className={style.title__container}
        style={{
          marginBottom: "20px",
        }}
      >
        <p className={style.content}>
          Completed primary, preparatory and secondary education at Azhar
          Instantiation in Tanta with a GPA of 90.34% during last year in high
          school, achieving the 4th position in my batch.
        </p>
      </div>
      <div className={style.title__container}>
        <h2 className={style.title}>University education</h2>
        <p className={style.date}>2018 - 2023</p>
      </div>
      <div className={style.title__container}>
        <p className={style.content}>
          Obtained a Bachelor's Degree from the Faculty of Engineering, Al-Azhar
          University, majoring in Computer Science. Achieved a GPA of 80.91% and
          was ranked 13th in my batch.
        </p>
      </div>
    </div>
  );
}

export default Education;
