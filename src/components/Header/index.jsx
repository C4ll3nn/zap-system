import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar component="header" position="static" bgcolor="primary.main">
      <Toolbar>
        <Typography variant="h5" component="h1" className="headerContent">
          ZAP SYSTEM
        </Typography>
        <Link to="/mensagens">Mensagens</Link>
        <Link to="/">Dashboard</Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
