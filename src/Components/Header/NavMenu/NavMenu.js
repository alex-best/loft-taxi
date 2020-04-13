import React, { useContext } from "react";
import pagesData from "../../../AppData/pages";
import Button from "@material-ui/core/Button";
import { AuthContext } from '../../../Contexts/AuthContext';

const NavMenu = (props) => {

    const auth = useContext(AuthContext);

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
        e.preventDefault();
        const pageId = e.target.closest(".nav-link").id;

        if (pageId) {
            if (pageId === 'login') {
                auth.logout();
            }
            props.onPageChange(pageId);
        }
    };

    return (
        <nav>
            {navItems.map((page) => {
                return (
                    <Button
                        className="nav-link"
                        style={{ fontWeight: 400 }}
                        href={page.href}
                        id={page.id}
                        key={page.id}
                        onClick={onLinkClickedHandler}
                    >
                        {page.title}
                    </Button>
                );
            })}
        </nav>
    );
};

export default NavMenu;
