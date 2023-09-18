import React from "react";
import style from "./experiance.module.css";

function Experiance() {
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
      id="experiance"
      ref={currentRef}
      className={`${style.experience} ${style.animate}`}
    >
      <div className={style.experiance__container}>
        <div className={style.title__container}>
          <h2 className={style.title}>Software Engineer | bld.ai</h2>
          <p className={style.date}>Nov 2022 – Present</p>
        </div>
        <div className={style.title__container}>
          <p className={style.content}>
            In my role as a Software Engineer at bld.ai, I have been actively
            involved in the development and enhancement of{" "}
            <a href="https://addthisto.cc" target="_blanck" rel="noreferrer">
              addthisto.cc
            </a>
            , an AI mailbox assistant. This application is designed to
            streamline communication processes, including collecting responses,
            chasing signatures, facilitating discussions, and engaging in chats
            powered by ChatGPT with recipients. Leveraging React JS, I have
            contributed to the creation of a user-friendly and responsive
            frontend that enhances the overall user experience.
          </p>
        </div>
      </div>

      <div>
        <div className={style.title__container}>
          <h2 className={style.title}>Software Engineer Intern | bld.ai</h2>
          <p className={style.date}>Jul 2022 – Nov 2022</p>
        </div>
        <ul className={style.content}>
          <li
            style={{
              marginBottom: "5px",
            }}
          >
            Used React JS to build frontend sites for courses that simulate the
            Udemy platform.
          </li>
          <li>
            Utilized Django Framework to handle HTTP request methods with db
            models using Django.
          </li>
        </ul>
        <p className={style.content}>
          During my internship at bld.ai, I had the opportunity to work on
          various projects that bolstered my understanding of software
          engineering. One notable project involved leveraging React JS to build
          frontend interfaces for courses, simulating the popular Udemy
          platform. This experience honed my skills in creating dynamic and
          interactive user interfaces to optimize the learning experience for
          users.
        </p>
        <p className={style.content}>
          Additionally, I gained hands-on experience utilizing the Django
          Framework to manage HTTP request methods and handle database models
          effectively. This involved seamless integration with the frontend,
          ensuring a smooth flow of data and interactions within the
          application. Through these experiences, I developed a strong
          foundation in full-stack development, improving my abilities to create
          efficient and robust web applications.
        </p>
      </div>
    </div>
  );
}

export default Experiance;
