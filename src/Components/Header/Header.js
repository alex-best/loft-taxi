import React from "react";
import NavMenu from "./NavMenu/";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";

const Header = () => {
    return (
        <AppBar position="static" color="default" style={{ zIndex: "10" }}>
            <Toolbar>
                <Typography style={{ flexGrow: 1 }}>
                    <Logo />
                </Typography>
                <NavMenu />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
