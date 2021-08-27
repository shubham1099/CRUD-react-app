import React from "react";
import landing from "../Assets/Images/landing.jpg";
import landing1 from "../Assets/Images/landing1.jpg";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  image: {
    width: "50%",
    height: "50%",
  },
  component: {
    margin: 50,
  },
});

const Eclectic = () => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <Typography variant="h4" style={{ marginbottom: "50px" }}>
        Eclectic
      </Typography>
      <Box style={{ display: "flex" }}>
        <img className={classes.component} src={landing}></img>
        <img className={classes.component} src={landing1}></img>
      </Box>
    </Box>
  );
};

export default Eclectic;
