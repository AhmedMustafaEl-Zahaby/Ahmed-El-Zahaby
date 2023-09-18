import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";
import {
  GitHub,
  WhatsApp,
  LinkedIn,
  Facebook,
  Instagram,
} from "@material-ui/icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
    flexWrap: "wrap",
    [theme.breakpoints.down(870)]: {
      "& .MuiButton-root": {
        display: "none",
      },
    },
  },
  button: {
    margin: "0 10px",
  },
}));

function Contacts() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ButtonGroup variant="text">
        <Button
          className={classes.button}
          href="mailto:ahmedelzahaby8122000@gmail.com"
          startIcon={<FontAwesomeIcon icon={faGoogle} />}
        >
          Gmail
        </Button>
        <Button
          className={classes.button}
          href="https://github.com/AhmedMustafaEl-Zahaby"
          startIcon={<GitHub />}
        >
          GitHub
        </Button>
        <Button
          className={classes.button}
          href="https://wa.me/0201127754339"
          startIcon={<WhatsApp />}
        >
          Whatsapp
        </Button>
        <Button
          className={classes.button}
          href="https://www.linkedin.com/in/ahmed-el-zahaby-6199601b7/"
          startIcon={<LinkedIn />}
        >
          LinkedIn
        </Button>
        <Button
          className={classes.button}
          href="https://www.facebook.com/ahmed.elzahabe/"
          startIcon={<Facebook />}
        >
          Facebook
        </Button>
        <Button
          className={classes.button}
          href="https://instagram.com/ahmed_elzahabey?igshid=MWI4MTIyMDE="
          startIcon={<Instagram />}
        >
          Instagram
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Contacts;
