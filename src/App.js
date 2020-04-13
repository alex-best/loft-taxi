import React, { useContext, useState } from "react";
import pagesData from "./AppData/pages";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import MapPage from "./Pages/MapPage/MapPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { AuthContext } from "./Contexts/AuthContext";

const App = props => {
	const auth = useContext(AuthContext);

    const [pages, setPagesData] = useState(props.pages);
    const [currentPage, setCurrentPage] = useState(props.initialPage);

    const onPageChangeHandler = (pageId) => {
        setCurrentPage(pageId);
    };

    let Component = null;

    switch (currentPage) {
        case pages.map.id:
            Component = <MapPage onPageChange={onPageChangeHandler} />;
            break;
        case pages.profile.id:
            Component = <ProfilePage onPageChange={onPageChangeHandler} />;
            break;
        default:
            break;
    }

    if (!auth.isLoggedIn) {
		switch (currentPage) {
			case pages.login.id:
				Component = <LoginPage onPageChange={onPageChangeHandler} />;
				break;
			case pages.signup.id:
				Component = <SignupPage onPageChange={onPageChangeHandler} />;
				break;
			default:
				Component = <LoginPage onPageChange={onPageChangeHandler} />;
				break;
		}
	}

    return <div data-testid="App" className="App">{Component}</div>;
};

App.defaultProps = {
    pages: pagesData,
    initialPage: pagesData.login.id
}

export default App;
