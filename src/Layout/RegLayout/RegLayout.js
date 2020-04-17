import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/img/logo.png';

import "./RegLayout.scss";

class RegLayout extends Component {
    render() {
        return (
            <div className="Login">
                    <Grid item xs={6}>
                        <Grid container justify="center" alignItems="center">
                            <div className="Login_logotype">
                                <img src={logo} alt="Loft Taxi" />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        {this.props.children}
                    </Grid>
            </div>
        );
    }
}

export default RegLayout;
