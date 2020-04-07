import React, { Component } from "react";
import Container from "../../Components/Container/Container";
import Grid from '@material-ui/core/Grid';

import background from "./background.jpg";
import logo from "./logo.png";

import "./RegLayout.scss";

class RegLayout extends Component {
    render() {
        return (
            <div className="Login" style={{ background: `url(${background})` }}>
                <Grid container> 
                    <Grid container xs={6} justify="center" alignItems="center">
                        <div className="Login_logotype">
                            <img src={logo} alt="Loft Taxi" />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        {this.props.children}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default RegLayout;
