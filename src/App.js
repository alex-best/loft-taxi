import React, { useContext, useState } from "react";
import pagesData from "./AppData/pages";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import MapPage from "./Pages/MapPage/MapPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { AuthContext } from "./Contexts/AuthContext";

const App = () => {
	const auth = useContext(AuthContext);

    const [currentPage, setCurrentPage] = useState(pagesData.login.id);

    const onPageChangeHandler = (pageId) => {
        setCurrentPage(pageId);
    };

    let Component = null;

    switch (currentPage) {
        case pagesData.map.id:
            Component = <MapPage onPageChange={onPageChangeHandler} />;
            break;
        case pagesData.profile.id:
            Component = <ProfilePage onPageChange={onPageChangeHandler} />;
            break;
        default:
            break;
    }

    if (!auth.isLoggedIn) {
		switch (currentPage) {
			case pagesData.login.id:
				Component = <LoginPage onPageChange={onPageChangeHandler} />;
				break;
			case pagesData.signup.id:
				Component = <SignupPage onPageChange={onPageChangeHandler} />;
				break;
			default:
				Component = <LoginPage onPageChange={onPageChangeHandler} />;
				break;
		}
	}

    return <div className="App">{Component}</div>;
};

export default App;
