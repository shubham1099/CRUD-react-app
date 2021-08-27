import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#FFFFFF",
    textDecoration: "None",
    marginRight: 30,
    fontSize: 20,
  },
});

const NavBar = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink to="./" exact className={classes.tabs}>
          Eclectic Crud App
        </NavLink>
        <NavLink to="all" exact className={classes.tabs}>
          All Users
        </NavLink>
        <NavLink to="add" exact className={classes.tabs}>
          Add Users
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
