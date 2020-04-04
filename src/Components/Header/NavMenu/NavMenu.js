import React from "react";
import pagesData from "../../../AppData/pages";

import "./NavMenu.css";

const NavMenu = props => {
    const navItems = [
        {
            ...pagesData.map,
            title: "Карта"
        },
        {
            ...pagesData.profile,
            title: "Профиль"
        },
        {
            ...pagesData.login,
            title: "Выйти"
        }
	];
	
	const onLinkClickedHandler = e => {
		e.preventDefault();
		const pageId = e.target.id;

		if (pageId) {
			props.onPageChange(pageId);
		}
	}

    return (
        <nav>
            <ul className="menu-list">
                {navItems.map(page => {
                    return (
                        <li className="menu-list_item" key={page.id}>
                            <a
                                href={page.href}
                                id={page.id}
								className="menu-list_item_link"
								onClick={onLinkClickedHandler}
                            >
                                {page.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavMenu;
