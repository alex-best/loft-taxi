import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LoginPage } from "./Pages/LoginPage/";
import { SignupPage } from "./Pages/SignupPage/";
import { ProfilePage } from "./Pages/ProfilePage/";
import MapPage from "./Pages/MapPage/";

const App = (props) => {
    const { isLoggedIn } = props;

    return (
        <div data-testid="App" className="App">
            {isLoggedIn ? (
                <Switch>
                    <Route path="/map" component={MapPage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Redirect to="/map" />
                </Switch>
            ) : (
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Redirect to="/login" />
                </Switch>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
};

export default connect(mapStateToProps)(App);
