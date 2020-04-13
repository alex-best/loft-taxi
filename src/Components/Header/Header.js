import React from "react";
import NavMenu from "./NavMenu/NavMenu";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		flexGrow: 1
	}
}

const Header = props => {
    const { classes } = props;

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography className={classes.root}>
                    <Logo />
                </Typography>
				<NavMenu onPageChange={props.onPageChange}/>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Header);
