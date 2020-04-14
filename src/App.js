import React from "react";
import pagesData from "./AppData/pages";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import MapPage from "./Pages/MapPage/MapPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const App = (props) => {

    return (
        <div data-testid="App" className="App">
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <PrivateRoute path="/map" component={MapPage} />
                <PrivateRoute path="/profile" component={ProfilePage} />
            </Switch>
        </div>
    );
};

App.defaultProps = {
    pages: pagesData,
    initialPage: pagesData.login.id,
};

export default App;
