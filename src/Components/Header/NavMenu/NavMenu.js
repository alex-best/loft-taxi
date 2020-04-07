import React from "react";
import pagesData from "../../../AppData/pages";
import Button from "@material-ui/core/Button";

import "./NavMenu.css";

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
        e.preventDefault();
        const pageId = e.target.closest(".nav-link").id;

        if (pageId) {
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
