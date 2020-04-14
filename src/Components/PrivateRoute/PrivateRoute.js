import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../../HOC/withAuth";

const PrivateRoute = ({ component: RouteComponent, isLoggedIn, ...rest }) => (
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
);

export default withAuth(PrivateRoute);
