import React from "react";
import Container from "../Container/Container";
import NavMenu from "./NavMenu/NavMenu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Logo } from "loft-taxi-mui-theme";
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		flexGrow: 1
	}
}

const Header = (props) => {
    const { classes } = props;

    return (
        <AppBar color="default">
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
