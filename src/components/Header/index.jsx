import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <AppBar component="header" position="static" bgcolor="primary.main">
      <Toolbar>
        <Typography variant="h5" component="h1" className="headerContent">
          ZAP SYSTEM
        </Typography>
        <NavLink
          to="/" exact
          activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            color: "#f2f556"
          }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/mensagens"
          activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            color: "#f2f556"
          }}
        >
          Mensagens
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
