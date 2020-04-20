import React from "react";
import pagesData from "../../../AppData/pages";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import { authLogout } from '../../../Pages/LoginPage/actions';
import { connect } from 'react-redux';

const NavMenu = (props) => {

    const navItems = [
        {
            ...pagesData.map,
            title: "Карта",
        },
        {
            ...pagesData.profile,
            title: "Профиль",
        },
        {
            ...pagesData.login,
            title: "Выйти",
        },
    ];

    const onLinkClickedHandler = (e) => {
        const pageId = e.target.closest(".nav-link").id;

        if (pageId) {
            if (pageId === 'login') {
                const { authLogout } = props;
                authLogout();
            }
        }
    };

    return (
        <nav>
            {navItems.map((page) => {
                return (
                    <Button
                        className="nav-link"
                        style={{ fontWeight: 400 }}
                        id={page.id}
                        key={page.id}
                        component={Link}
                        to={page.href}
                        onClick={onLinkClickedHandler}
                    >
                        {page.title}
                    </Button>
                );
            })}
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        test: state.authReducer.isLoggedIn
    }
}

const mapDispatchToProps = { authLogout };

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
