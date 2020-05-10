import React from "react";
import {Redirect} from "react-router-dom";

export const AuthRedirectComponent = (Component) => {

    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to={'/login'} />;

        return <Component {...props} />
    };

    return RedirectComponent

};