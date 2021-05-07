import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { islogged } = useContext(AuthContext);

    return <Route {...rest} render={(props) => (islogged ? <Component {...rest} {...props} /> : <Redirect to="/login" />)} />;
};

export default ProtectedRoute;
