import React, { useEffect, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import style from "./progrss.module.css";

const useStyles = makeStyles({
  linearProgress: {
    height: "16px",
    borderRadius: "8px",
    width: "100%",
  },
  progressBarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
});

const ProgressBar = (props) => {
  const { value, color, skill_name } = props;
  const classes = useStyles();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= value ? value : prevProgress + 1
      );
    }, 40);

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <div className={`${classes.progressBarContainer} ${style.container}`}>
      <div className={style.content}>{skill_name}</div>
      <div className={style.bar}>
        <div
          style={{
            flex: 1,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            color={color || "primary"} // Use "primary" if color is not provided
            className={classes.linearProgress}
          />
        </div>
      </div>
      <div className={style.percent}>{`${progress}%`}</div>
    </div>
  );
};

export default ProgressBar;
