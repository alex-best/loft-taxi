import React, { useEffect } from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import MapPage from "./Pages/MapPage/MapPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getCardRequest } from "./Store/Profile/actions";
import { getAddressListRequest } from "./Store/AddressList/actions";

const App = (props) => {
    const {
        isLoggedIn,
        getCardRequest,
        token,
        getAddressListRequest,
    } = props;

    useEffect(() => {
        if (isLoggedIn) {
            getCardRequest(token);
            getAddressListRequest();
        }
    });

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
        token: state.auth.token,
    };
};

const mapDispatchToProps = { getCardRequest, getAddressListRequest };

export default connect(mapStateToProps, mapDispatchToProps)(App);
