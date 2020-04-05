import React, { Component } from "react";
import Container from "../../Components/Container/Container";

import background from "./background.jpg";
import logo from "./logo.png";

import "./RegLayout.scss";

class RegLayout extends Component {
    render() {
        return (
            <div className="Login" style={{ background: `url(${background})` }}>
                <Container>
                    <div className="Login_row">
                        <div className="col-left">
                            <div className="Login_logotype">
                                <img src={logo} alt="Loft Taxi" />
                            </div>
                        </div>
                        <div className="col-right">
							{ this.props.children }
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default RegLayout;
