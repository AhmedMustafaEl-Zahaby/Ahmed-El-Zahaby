import React from "react";
import style from "./projects.module.css";

function Projects() {
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
      id="projects"
      ref={currentRef}
      className={`${style.projects} ${style.animate}`}
    >
      <div className={style.projects__container}>
        <div className={style.title__container}>
          <h2 className={style.title}>addthisto.cc</h2>
        </div>
        <div>
          <ul>
            <li className={style.content}>
              Served as a Product Manager, Technical Lead, and Web Developer
            </li>
            <li className={style.content}>
              Developed an AI mail assistant that integrates with Gmail to
              collect responses, auto-create NDAs, and engage in chat parties
              using ChatGPT. Utilized technologies including OpenAI APIs, Google
              APIs,Docker , .. etc.
            </li>
          </ul>
        </div>
      </div>

      <div className={style.projects__container}>
        <div className={style.title__container}>
          <h2 className={style.title}>Udemy Page</h2>
        </div>
        <div>
          <ul>
            <li className={style.content}>Built using React Js</li>
            <li className={style.content}>
              It’s a simulation of the Udemy Courses Platform. You can find the
              code for this project{" "}
              <a
                href="https://github.com/AhmedMustafaEl-Zahaby/udemy-page"
                target="_blank"
                rel="noreferrer"
              >
                [here]
              </a>
              .
            </li>
            <li className={style.content}>
              Watch a video about how it works{" "}
              <a
                href="https://www.linkedin.com/posts/ahmed-el-zahaby-6199601b7_javascript-css-reactjs-activity-6974027172755722240-BE7N?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noreferrer"
              >
                [here]
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
      <div className={style.projects__container}>
        <div className={style.title__container}>
          <h2 className={style.title}>Music Platform</h2>
        </div>
        <ul>
          <li className={style.content}>
            Built using Django, Django_rest_framework, Python, Sqlite
          </li>
          <li className={style.content}>
            Backend API server that provides and handles albums, artists, users,
            songs, and relations between them with authentications and
            permissions, along with testing, You can find the code for this
            project{" "}
            <a
              href="https://github.com/AhmedMustafaEl-Zahaby/Music_Platform"
              target="_blank"
              rel="noreferrer"
            >
              [here]
            </a>
            .
          </li>
        </ul>
      </div>
      <div className={style.projects__container}>
        <div className={style.title__container}>
          <h3 className={style.title}>
            Web based Post-graduation management system for Al-Azhar University
          </h3>
        </div>
        <p className={style.content}>
          This was my graduation project where I achieved A+. I served as a
          full-stack developer using React for the frontend and Django for the
          backend.
        </p>
      </div>
      <div className={style.projects__container}>
        <div>
          <div className={style.title__container}>
            <h2 className={style.title}>Please, On Line</h2>
          </div>
          <ul>
            <li className={style.content}>Built using Java Swing</li>
            <li className={style.content}>
              A desktop application that simulates Queueing Theory Queries and
              charts its changes. You can find the code for this project{" "}
              <a
                href="https://github.com/AhmedMustafaEl-Zahaby/Please-On-Line-"
                target="_blank"
                rel="noreferrer"
              >
                [here]
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
      <div className={style.projects__container}>
        <div className={style.title__container}>
          <h3 className={style.title}>GUI using Python for CAD</h3>
        </div>
        <p className={style.content}>
          I created a visualized application using the tkinter library that
          traces the tree with nodes and finds out voltage and current in any
          branch using DSU algorithm. You can find the code for this project{" "}
          <a
            href="https://github.com/AhmedMustafaEl-Zahaby/CAD-Project"
            target="_blank"
            rel="noreferrer"
          >
            [here]
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Projects;
