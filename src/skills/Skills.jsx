import React from "react";
import ProgressBar from "../components/ProgressBar"; // Assuming ProgressBar.js is in the same directory
import { makeStyles } from "@material-ui/core/styles";
import { skills } from "./Data";
import style from "../education/education.module.css";

const useStyles = makeStyles({
  skillCategory: {
    marginBottom: "10px", // Adjust margin to provide space between categories
  },
  skillIcon: {
    marginRight: "10px",
  },
  skillInfo: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    marginBottom: "1.7rem",
  },
});

function Skills() {
  const classes = useStyles();
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
      id="skills"
      ref={currentRef}
      className={`${style.education} ${style.animate}`}
    >
      {skills.map((categoryData, index) => (
        <div key={index} className={classes.skillCategory}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "1.7rem",
            }}
          >
            <div className={`${classes.skillIcon} ${style.title}`}>
              {categoryData.icon}
            </div>
            <h2 className={style.title}>{`${categoryData.category}`}</h2>
          </div>
          <div className={classes.skillInfo}>
            {categoryData.skills.map((skill, skillIndex) => (
              <ProgressBar
                value={skill.percentage}
                color="primary"
                skill_name={skill.name}
                key={skillIndex}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
