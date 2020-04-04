import React from "react";
import Container from "../Container/Container";
import NavMenu from "./NavMenu/NavMenu";

import logo from "./logo.png";
import "./Header.css";

const Header = props => {

    return (
        <header className="Header">
            <Container>
                <div className="Header_row">
                    <div className="Header_logo">
                        <img src={logo} alt="Loft Taxi" />
                    </div>
                    <NavMenu onPageChange={props.onPageChange} />
                </div>
            </Container>
        </header>
    );
};

export default Header;
