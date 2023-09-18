import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import {
  GitHub,
  WhatsApp,
  LinkedIn,
  Facebook,
  Instagram,
} from "@material-ui/icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./contacts.module.css";

const useStyles = makeStyles({
  iconButton: {
    color: "#0E2271B8",
    marginBottom: "10px",
  },
});

function IconsContacts() {
  const classes = useStyles();

  return (
    <div className={style.container}>
      <ButtonGroup variant="text" className={style.container}>
        <IconButton
          className={classes.iconButton}
          href="mailto:ahmedelzahaby8122000@gmail.com"
        >
          <FontAwesomeIcon icon={faGoogle} />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          href="https://github.com/AhmedMustafaEl-Zahaby"
        >
          <GitHub />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          href="https://wa.me/0201127754339"
        >
          <WhatsApp />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          href="https://www.linkedin.com/in/ahmed-el-zahaby-6199601b7/"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          href="https://www.facebook.com/ahmed.elzahabe/"
        >
          <Facebook />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          href="https://instagram.com/ahmed_elzahabey?igshid=MWI4MTIyMDE="
        >
          <Instagram />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}

export default IconsContacts;
