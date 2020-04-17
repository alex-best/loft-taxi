import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: RouteComponent, isLoggedIn, ...rest }) => {
    return (
        <Route
        {...rest}
        render={(routeProps) =>
            isLoggedIn ? (
                <RouteComponent {...routeProps} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authReducer.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(PrivateRoute);
